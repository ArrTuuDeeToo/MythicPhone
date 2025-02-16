import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/styles';
import { throttle } from 'lodash';
import {
    Tabs,
    Tab,
    AppBar,
    Grid,
    IconButton,
    Tooltip,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Loans from './Loans';
import Nui from '../../util/Nui';
import { Loader } from '../../components';
import { Modal } from '../../components';

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
    },
    headerTitle: {
        fontSize: 20,
        lineHeight: '50px',
    },
    headerActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
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
    highlight: {
        color: theme.palette.info.light,
    },
    editField: {
        marginTop: 0,
        marginBottom: 10,
        width: '100%',
    },
    headerAction: {
        color: 'white',
        '&:disabled': {
            color: 'rgba(255, 255, 255, 0.3)',
        },
    },
    tabsContainer: {
        background: '#1a1a1a',
    }
}));

const LoanTabs = withStyles((theme) => ({
    root: {
        borderBottom: '1px solid #30518c',
    },
    indicator: {
        backgroundColor: '#30518c',
    },
}))((props) => <Tabs {...props} />);

const LoanTab = withStyles((theme) => ({
    root: {
        width: '50%',
        color: '#8a8a8a',
        '&:hover': {
            color: '#30518c',
            transition: 'color ease-in 0.15s',
        },
        '&$selected': {
            color: '#30518c',
            transition: 'color ease-in 0.15s',
        },
        '&:focus': {
            color: '#30518c',
            transition: 'color ease-in 0.15s',
        },
    },
    selected: {},
}))((props) => <Tab {...props} />);

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.loans.tab);
    const loadedData = useSelector(state => state.data.data.bankLoans);
    const creditScore = useSelector(state => state.data.data.bankLoans?.creditScore);
    const [loading, setLoading] = useState(false);
    const [viewingCredit, setViewingCredit] = useState(false);

    const fetch = useMemo(() => throttle(async () => {
        if (loading) return;
        setLoading(true);
        try {
            let res = await (await Nui.send('Loans:GetData')).json();
            if (res) {
                dispatch({
                    type: 'SET_DATA',
                    payload: {
                        type: 'bankLoans',
                        data: res,
                    },
                });
            } else {
                throw res;
            }
        } catch (err) {
            dispatch({
                type: 'SET_DATA',
                payload: {
                    type: 'bankLoans',
                    data: Array(),
                },
            });
        }
        setLoading(false);
    }, 3500), []);

    useEffect(() => {
        fetch();
    }, []);

    const viewCredit = () => {
        setViewingCredit(true);
    };

    const handleTabChange = (event, tab) => {
        dispatch({
            type: 'SET_LOAN_TAB',
            payload: { tab: tab },
        });
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <span className={classes.headerTitle}>
                    Loans - {activeTab === 0 ? 'Vehicle' : 'Property'}
                </span>
                <div className={classes.headerActions}>
                    <Tooltip title="Credit Score">
                        <span>
                            <IconButton
                                onClick={viewCredit}
                                disabled={loading || viewingCredit}
                                className={classes.headerAction}
                            >
                                <FontAwesomeIcon icon={['fas', 'award']} />
                            </IconButton>
                        </span>
                    </Tooltip>
                    <Tooltip title="Refresh">
                        <span>
                            <IconButton
                                onClick={fetch}
                                disabled={loading}
                                className={classes.headerAction}
                            >
                                <FontAwesomeIcon
                                    className={`fa ${loading ? 'fa-spin' : ''}`}
                                    icon={['fas', 'arrows-rotate']}
                                />
                            </IconButton>
                        </span>
                    </Tooltip>
                </div>
            </div>
            
            <div className={classes.tabsContainer}>
                <LoanTabs
                    value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    scrollButtons={false}
                >
                    <LoanTab className={classes.phoneTab} label="Vehicle Loans" />
                    <LoanTab className={classes.phoneTab} label="Property Loans" />
                </LoanTabs>
            </div>

            {(loading || !loadedData) ? (
                <Loader static text="Loading Loans" />
            ) : (
                <div className={classes.content}>
                    <div
                        className={classes.tabPanel}
                        role="tabpanel"
                        hidden={activeTab !== 0}
                        id="accounts"
                    >
                        {activeTab === 0 && <Loans loanType="vehicle" />}
                    </div>
                    <div
                        className={classes.tabPanel}
                        role="tabpanel"
                        hidden={activeTab !== 1}
                        id="bills"
                    >
                        {activeTab === 1 && <Loans loanType="property" />}
                    </div>
                </div>
            )}

            <Modal
                open={viewingCredit}
                title="Credit Score"
                onClose={() => setViewingCredit(false)}
            >
                <p className={classes.editField}>
                    Your Credit Score is{' '}
                    <span className={classes.highlight}>
                        {creditScore ?? 0}
                    </span>
                    <br /><br />
                    You can improve your credit score by paying loans on time or in advanced. 
                    Missing loan payments will decrease your credit score.
                </p>
            </Modal>
        </div>
    );
};