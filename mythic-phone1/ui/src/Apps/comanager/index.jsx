import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    AppBar,
    Grid,
    List,
    ListItem,
    ListItemText,
    Tooltip,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router';
import { throttle } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from '../../components';
import Nui from '../../util/Nui';
import Truncate from 'react-truncate';
import { useAlert, useJobPermissions } from '../../hooks';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#27272a',
        fontSize: 20,
        padding: 15,
        lineHeight: '45px',
        height: 78,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    subHeader: {
        background: '#27272a',
        padding: '8px 16px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsItem: {
        color: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: 14,
        '& .icon': {
            color: '#ff4444',
        },
    },
    content: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#ffffff52',
            borderRadius: 3,
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#ff4444',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
    },
    item: {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        '&:first-of-type': {
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '& .MuiListItemText-primary': {
            color: '#ffffff',
        },
        '& .MuiListItemText-secondary': {
            color: 'rgba(255, 255, 255, 0.7)',
        },
    },
    list: {
        height: '100%',
        width: '100%',
        padding: 0,
    },
    emptyMsg: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '25%',
        color: 'rgba(255, 255, 255, 0.7)',
    },
}));

export default (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const sendAlert = useAlert();
    const history = useHistory();
    const hasPerm = useJobPermissions();
    const rosters = useSelector((state) => state.com.roster);
    const rostersRefreshed = useSelector((state) => state.com.rosterUpdated);
    const externalJobs = useSelector((state) => state.data.data.externalJobs);
    const player = useSelector((state) => state.data.data.player);
    const [loading, setLoading] = useState(false);

    // Keep all existing functions unchanged
    const manageJob = (jobId) => {
        history.push(`/apps/comanager/view/${jobId}`);
        dispatch({
            type: 'SET_COM_TAB',
            payload: { tab: 0 },
        });
    };

    const fetchRoster = useMemo(() => throttle(async () => {
        setLoading(true);
        try {
            let res = await (await Nui.send('FetchRoster', {})).json();
            if (res && res.rosterData) {
                dispatch({
                    type: 'UPDATE_ROSTERS',
                    payload: {
                        roster: res.rosterData,
                    },
                });
            } else throw res;
        } catch (err) {
            console.log(err);
            sendAlert('Unable to Load Roster\'s');
            dispatch({
                type: 'UPDATE_ROSTERS',
                payload: {
                    roster: false,
                },
            });
        }
        setLoading(false);
    }, 5000), []);

    useEffect(() => {
        if ((player.Jobs && player.Jobs.length) > 0) {
            if (!rosters || (Date.now() - rostersRefreshed) >= 180000) {
                fetchRoster();
            }
        }
    }, []);

    return (
        <div className={classes.wrapper}>
            <AppBar position="static" className={classes.header}>
                <Grid container>
                    <Grid item xs={7}>
                        <Truncate lines={1}>Company Manager</Truncate>
                    </Grid>
                </Grid>
            </AppBar>

            {/* New Sub-Header for Stats */}
            <div className={classes.subHeader}>
                <div className={classes.statsItem}>
                    <FontAwesomeIcon icon={['fas', 'users']} className="icon" />
                    <span>Active Roster: {rosters ? Object.keys(rosters).length : 0}</span>
                </div>
                <div className={classes.statsItem}>
                    <FontAwesomeIcon icon={['fas', 'clock']} className="icon" />
                    <span>Time Worked: 8h 30m</span>
                </div>
            </div>

            <div className={classes.content}>
                {loading ? (
                    <Loader static text="Loading" />
                ) : (
                    <>
                        {(player.Jobs && player.Jobs.length) > 0 ? (
                            <List className={classes.list}>
                                {player.Jobs.map((job) => {
                                    if (!externalJobs.includes(job.Id)) {
                                        return (
                                            <ListItem
                                                button
                                                key={`job-${job.Id}`}
                                                onClick={() => manageJob(job.Id)}
                                                className={classes.item}
                                            >
                                                <ListItemText
                                                    primary={
                                                        <span>
                                                            {job.Workplace ? job.Workplace?.Name : job.Name}
                                                        </span>
                                                    }
                                                    secondary={`Employed as ${job.Grade.Name}`}
                                                />
                                            </ListItem>
                                        );
                                    }
                                })}
                            </List>
                        ) : (
                            <div className={classes.emptyMsg}>
                                You're Not Employed at a Company
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};