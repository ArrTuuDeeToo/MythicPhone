import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, IconButton } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

import { usePermissions } from '../../hooks';
import Welcome from './components/Welcome';
import Tracks from './Tracks';
import Pending from './Pending';
import Recent from './Recent';
import Create from './Create';
import Unauthorized from './components/Unauthorized';

export const TrackTypes = {
    laps: 'Laps',
    p2p: 'Point to Point',
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#30518c',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '78px',
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        lineHeight: '50px',
        display: 'flex',
        alignItems: 'center',
        '& .name': {
            color: theme.palette.primary.light,
            marginLeft: 8,
        },
        '& svg': {
            marginRight: 5,
        },
    },
    headerActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    headerAction: {
        color: 'white',
        '&:disabled': {
            color: 'rgba(255, 255, 255, 0.3)',
        },
    },
    tabsContainer: {
        background: '#1a1a1a',
    },
    content: {
        flex: 1,
        padding: 10,
        overflowY: 'auto',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#ffffff52',
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
    },
}));

const RedlineTabs = withStyles({
    root: {
        borderBottom: '1px solid #30518c',
    },
    indicator: {
        backgroundColor: '#30518c',
    },
})(Tabs);

const RedlineTab = withStyles({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: '#8a8a8a',
        minHeight: '48px',
        '&:hover': {
            color: '#30518c',
            opacity: 1,
        },
        '&$selected': {
            color: '#30518c',
            fontWeight: 'bold',
        },
        '&:focus': {
            color: '#30518c',
        },
    },
    selected: {},
})(Tab);

export default (props) => {
    const dispatch = useDispatch();
    const hasPerm = usePermissions();
    const history = useHistory();
    const activeTab = useSelector((state) => state.race.tab);
    const onDuty = useSelector((state) => state.data.data.onDuty);
    const alias = useSelector((state) => state.data.data.player.Alias?.redline);
    const classes = useStyles();

    useEffect(() => {
        if (Boolean(props?.match?.params?.tab)) {
            dispatch({
                type: 'SET_RACE_TAB',
                payload: { tab: +props?.match?.params?.tab },
            });
            history.replace('/apps/redline');
        }
    }, [props.match.params]);

    const canCreate = hasPerm('redline', 'create');

    const handleTabChange = (event, tab) => {
        dispatch({
            type: 'SET_RACE_TAB',
            payload: { tab: tab },
        });
    };

    const getTabLabel = (index) => {
        const labels = ['Tracks', 'Pending', 'Recent'];
        if (canCreate) labels.push('Create');
        return labels[index] || '';
    };

    if (!alias) return <Welcome />;
    if (onDuty == 'police') return <Unauthorized />;

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.headerTitle}>
                    <FontAwesomeIcon icon={['fas', 'flag-checkered']} />
                    <span className="name">{alias}</span>
                </span>
                <div className={classes.headerActions}>
                    <IconButton className={classes.headerAction}>
                        <FontAwesomeIcon icon={['fas', 'user']} />
                    </IconButton>
                    <IconButton className={classes.headerAction}>
                        <FontAwesomeIcon icon={['fas', 'arrows-rotate']} />
                    </IconButton>
                </div>
            </div>

            <div className={classes.tabsContainer}>
                <RedlineTabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    scrollButtons={false}
                >
                    <RedlineTab 
                        label="Tracks" 
                        style={{ 
                            minWidth: canCreate ? '25%' : '33.3%' 
                        }} 
                    />
                    <RedlineTab 
                        label="Pending" 
                        style={{ 
                            minWidth: canCreate ? '25%' : '33.3%' 
                        }} 
                    />
                    <RedlineTab 
                        label="Recent" 
                        style={{ 
                            minWidth: canCreate ? '25%' : '33.3%' 
                        }} 
                    />
                    {canCreate && (
                        <RedlineTab 
                            label="Create" 
                            style={{ 
                                minWidth: '25%' 
                            }} 
                        />
                    )}
                </RedlineTabs>
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
        </div>
    );
};