import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'lodash';
import { Tabs, Tab, AppBar, Grid, IconButton } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Loader } from '../../components';
import Nui from '../../util/Nui';
import Accounts from './Accounts';
import Bills from './Bills';

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

const BankTabs = withStyles({
    root: {
        borderBottom: '1px solid #30518c',
    },
    indicator: {
        backgroundColor: '#30518c',
    },
})(Tabs);

const BankTab = withStyles({
    root: {
        textTransform: 'uppercase',
        fontWeight: 'normal',
        color: '#8a8a8a',
        minHeight: '48px',
        minWidth: '50%',
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

export default ((props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const activeTab = useSelector((state) => state.bank.tab);
    const [loading, setLoading] = useState(false);

    const fetch = useMemo(() => throttle(async () => {
        if (loading) return;
        setLoading('Loading Accounts');
        try {
            let res = await (await Nui.send('Banking:GetData')).json();
            if (res) {
                dispatch({
                    type: 'SET_DATA',
                    payload: {
                        type: 'bankAccounts',
                        data: res,
                    },
                });
            } else {
                throw res;
            }
        } catch (err) {
            // dispatch({
            //     type: 'SET_DATA',
            //     payload: {
            //         type: 'bankAccounts',
            //         data: {
            //             accounts: Array(),
            //             transactions: Object(),
            //             pendingBills: Array()
            //         },
            //     },
            // });
        }
        setLoading(false);
    }, 2000), []);

    useEffect(() => {
        fetch();
    }, []);

    const handleTabChange = (event, tab) => {
        dispatch({
            type: 'SET_BANK_TAB',
            payload: { tab: tab },
        });
    };

    const getTabName = () => {
        switch(activeTab) {
            case 0:
                return 'Bank Accounts';
            case 1:
                return 'Pending Bills';
            default:
                return 'Banking';
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.headerTitle}>
                    {getTabName()}
                </span>
                <div className={classes.headerActions}>
                    <IconButton 
                        className={classes.headerAction}
                        disabled
                    >
                        <FontAwesomeIcon icon={['fas', 'bank']} />
                    </IconButton>
                    <IconButton 
                        className={classes.headerAction}
                        onClick={() => fetch()}
                        disabled={Boolean(loading)}
                    >
                        <FontAwesomeIcon 
                            icon={['fas', 'arrows-rotate']}
                            className={loading ? 'fa-spin' : ''}
                        />
                    </IconButton>
                </div>
            </div>

            <div className={classes.tabsContainer}>
                <BankTabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    scrollButtons={false}
                >
                    <BankTab label="Accounts" />
                    <BankTab label="Bills" />
                </BankTabs>
            </div>

            {loading ? (
                <Loader static text={loading} />
            ) : (
                <div className={classes.content}>
                    <div
                        className={classes.tabPanel}
                        role="tabpanel"
                        hidden={activeTab !== 0}
                        id="accounts"
                    >
                        {activeTab === 0 && <Accounts />}
                    </div>
                    <div
                        className={classes.tabPanel}
                        role="tabpanel"
                        hidden={activeTab !== 1}
                        id="bills"
                    >
                        {activeTab === 1 && (
                            <Bills 
                                setLoading={(state) => setLoading(state)} 
                                refreshAccounts={() => fetch()} 
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
});