import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { throttle } from 'lodash';

import Nui from '../../util/Nui';
import { useMyStates } from '../../hooks';
import Jobs from './Jobs';
import Groups from './Groups';
import Reputations from './Reputations';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        padding: '12px 16px',
        borderBottom: `1px solid ${theme.palette.border.divider}`,
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontSize: '16px',
        fontWeight: 500,
    },
    tabs: {
        borderBottom: `1px solid ${theme.palette.border.divider}`,
        backgroundColor: theme.palette.background.paper,
    },
    content: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: 10,
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
    tabPanel: {},
    phoneTab: {
        minWidth: '25%',
    },
}));

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const hasState = useMyStates();
    const player = useSelector((state) => state.data.data.player);
    const activeTab = useSelector((state) => state.labor.tab);

    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [illegal, setIllegal] = useState(null);
    const [groups, setGroups] = useState(null);
    const [myGroup, setMyGroup] = useState(null);
    const [myReputations, setMyReputations] = useState(null);

    const fetch = useMemo(
        () =>
            throttle(async () => {
                if (loading) return;
                setLoading(true);
                try {
                    let res = await (await Nui.send('GetLaborDetails')).json();
                    if (res) {
                        setJobs(res.jobs);
                        setGroups(res.groups);
                        setMyReputations(res.reputations);
                    } else {
                        setJobs(Array());
                        setGroups(Array());
                        setMyReputations(Array());
                    }
                } catch (err) {
                    console.log(err);
                    setJobs(Object());
                    setGroups(Array());
                    setMyReputations(Array());
                }
                setLoading(false);
            }, 1000),
        [],
    );

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        if (!Boolean(groups)) return;
        setMyGroup(
            groups.filter(
                (wg) =>
                    wg?.Creator?.ID == player.Source ||
                    (Boolean(wg?.Members) &&
                        wg?.Members.filter((m) => m.ID == player.Source)
                            .length > 0),
            )[0],
        );
    }, [groups]);

    useEffect(() => {
        if (!Boolean(jobs) || !Boolean(player) || loading) return;
        setFiltered(
            Object.keys(jobs)
                .filter((k) => !jobs[k].Restricted)
                .reduce((obj, key) => {
                    obj[key] = jobs[key];
                    return obj;
                }, {}),
        );
    }, [jobs, player, loading]);

    useEffect(() => {
        if (!Boolean(jobs) || !Boolean(player) || loading) return;
        if (Object.keys(jobs).length > 0) {
            setIllegal(
                Object.keys(jobs)
                    .filter(
                        (k) =>
                            Boolean(jobs[k].Restricted) &&
                            Boolean(jobs[k].Restricted?.state) &&
                            hasState(jobs[k].Restricted.state),
                    )
                    .reduce((obj, key) => {
                        obj[key] = jobs[key];
                        return obj;
                    }, {}),
            );
        } else setIllegal(null);
    }, [jobs, player, loading]);

    const handleTabChange = (event, tab) => {
        dispatch({
            type: 'SET_LABOR_TAB',
            payload: { tab: tab },
        });
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                Labor
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
                    <Tab className={classes.phoneTab} label="Jobs" />
                    {Boolean(illegal) && Object.keys(illegal).length > 0 && (
                        <Tab className={classes.phoneTab} label="Restricted" />
                    )}
                    <Tab className={classes.phoneTab} label="Groups" />
                    <Tab className={classes.phoneTab} label="Reputation" />
                </Tabs>
            </div>
            <div className={classes.content}>
                <div
                    className={classes.tabPanel}
                    role="tabpanel"
                    hidden={activeTab !== 0}
                    id="jobs"
                >
                    {activeTab === 0 && (
                        <Jobs
                            jobs={filtered}
                            groups={groups}
                            myGroup={myGroup}
                            loading={loading}
                            onRefresh={fetch}
                        />
                    )}
                </div>
                {Boolean(illegal) && Object.keys(illegal).length > 0 && (
                    <div
                        className={classes.tabPanel}
                        role="tabpanel"
                        hidden={activeTab !== 1}
                        id="illegal"
                    >
                        {activeTab === 1 && (
                            <Jobs
                                jobs={illegal}
                                groups={groups}
                                myGroup={myGroup}
                                loading={loading}
                                onRefresh={fetch}
                            />
                        )}
                    </div>
                )}
                <div
                    className={classes.tabPanel}
                    role="tabpanel"
                    hidden={
                        activeTab !==
                        (Boolean(illegal) && Object.keys(illegal).length > 0 ? 2 : 1)
                    }
                    id="groups"
                >
                    {activeTab === (Boolean(illegal) && Object.keys(illegal).length > 0)
                        ? 2
                        : 1 && (
                            <Groups
                                groups={groups}
                                myGroup={myGroup}
                                loading={loading}
                                onRefresh={fetch}
                            />
                        )}
                </div>
                <div
                    className={classes.tabPanel}
                    role="tabpanel"
                    hidden={
                        activeTab !==
                        (Boolean(illegal) && Object.keys(illegal).length > 0 ? 3 : 2)
                    }
                    id="groups"
                >
                    {activeTab === (Boolean(illegal) && Object.keys(illegal).length > 0)
                        ? 3
                        : 2 && (
                            <Reputations
                                myReputations={myReputations}
                                loading={loading}
                                onRefresh={fetch}
                            />
                        )}
                </div>
            </div>
        </div>
    );
};