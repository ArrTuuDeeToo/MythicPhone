import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Tooltip, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Loader } from '../../components';
import Reputation from './component/Reputation';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: '#1a1a1a',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        height: 48,
        background: '#27272a',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 500,
    },
    body: {
        flex: 1,
        padding: '16px',
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
    refreshButton: {
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover': {
            color: '#ffffff',
        },
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

export default ({ myReputations, loading, onRefresh }) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                {!Boolean(myReputations) ? (
                    <Loader static text="Loading" />
                ) : myReputations.length > 0 ? (
                    myReputations
                        .sort((a, b) => a.label.localeCompare(b.label))
                        .map((rep) => {
                            return (
                                <Reputation
                                    key={`labor-${rep.id}`}
                                    rep={rep}
                                    disabled={loading}
                                />
                            );
                        })
                ) : (
                    <div className={classes.emptyMsg}>
                        No Reputation Built
                    </div>
                )}
            </div>
        </div>
    );
};