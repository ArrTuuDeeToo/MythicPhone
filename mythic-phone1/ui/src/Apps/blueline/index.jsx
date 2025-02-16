import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

import { useJobPermissions } from '../../hooks';
import Tracks from './Tracks';
import Pending from './Pending';
import Recent from './Recent';
import Create from './Create';
import Unauthorized from './components/Unauthorized';

export const TrackTypes = {
    laps: 'Laps',
    p2p: 'Point to Point',
};

export default (props) => {
    const dispatch = useDispatch();
    const hasPerm = useJobPermissions();
    const history = useHistory();
    const activeTab = useSelector((state) => state.pdRace.tab);
    const onDuty = useSelector((state) => state.data.data.onDuty);
    const alias = useSelector((state) => state.data.data.player.Callsign);

    useEffect(() => {
        if (Boolean(props?.match?.params?.tab)) {
            dispatch({
                type: 'PD_SET_RACE_TAB',
                payload: { tab: +props?.match?.params?.tab },
            });
            history.replace(`/apps/blueline`);
        }
    }, [props.match.params]);

    const canCreate = hasPerm('PD_MANAGE_TRIALS', 'police')

    const useStyles = makeStyles((theme) => ({
        wrapper: {
            height: '100%',
            background: theme.palette.secondary.main,
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            padding: '8px 16px',
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderBottom: `1px solid ${theme.palette.border.divider}`,
            background: theme.palette.background.paper,
            '& .name': {
                color: theme.palette.primary.light,
                marginLeft: '4px'
            },
            '& svg': {
                marginRight: 5,
            },
        },
        tabs: {
            borderBottom: `1px solid ${theme.palette.border.divider}`,
            background: theme.palette.background.paper,
            '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
            },
        },
        content: {
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: theme.palette.background.default,
            '&::-webkit-scrollbar': {
                width: 6,
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#ffffff52',
                borderRadius: 3,
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: theme.palette.primary.main,
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
        },
        tabPanel: {
            height: '100%',
            padding: '16px',
        },
        phoneTab: {
            minWidth: canCreate ? '25%' : '33.3%',
            textTransform: 'none',
            fontSize: '14px',
            '&.Mui-selected': {
                color: theme.palette.primary.main,
            },
        },
        noTracksMessage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: theme.palette.text.secondary,
        }
    }));
    
    const classes = useStyles();

    const handleTabChange = (event, tab) => {
        dispatch({
            type: 'PD_SET_RACE_TAB',
            payload: { tab: tab },
        });
    };

    return (
        <div className={classes.wrapper}>
            {!alias ? (
                <Unauthorized />
            ) : (
                <>
                    <div className={classes.header}>
                        <FontAwesomeIcon icon={['fas', 'user']} />
                        Welcome Back <span className="name">{alias}</span>
                    </div>
                    <div className={classes.tabs}>
                        <Tabs
                            value={activeTab}
                            onChange={handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            scrollButtons={false}
                        >
                            <Tab className={classes.phoneTab} label="Tracks" />
                            <Tab className={classes.phoneTab} label="Pending" />
                            <Tab className={classes.phoneTab} label="Recent" />
                            {canCreate && <Tab className={classes.phoneTab} label="Create" />}
                        </Tabs>
                    </div>
                    <div className={classes.content}>
                        <div
                            className={classes.tabPanel}
                            role="tabpanel"
                            hidden={activeTab !== 0}
                            id="tracks"
                        >
                            {activeTab === 0 && <Tracks />}
                        </div>
                        <div
                            className={classes.tabPanel}
                            role="tabpanel"
                            hidden={activeTab !== 1}
                            id="pending"
                        >
                            {activeTab === 1 && <Pending />}
                        </div>
                        <div
                            className={classes.tabPanel}
                            role="tabpanel"
                            hidden={activeTab !== 2}
                            id="recent"
                        >
                            {activeTab === 2 && <Recent />}
                        </div>
                        {canCreate && (
                            <div
                                className={classes.tabPanel}
                                role="tabpanel"
                                hidden={activeTab !== 3}
                                id="create"
                            >
                                {activeTab === 3 && <Create />}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};