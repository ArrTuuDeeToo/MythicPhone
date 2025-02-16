import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import { Loader } from '../../components';
import Job from './component/Job';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
    },
    body: {
        padding: 10,
        height: '100%',
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
    emptyMsg: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '25%',
    },
}));

export default ({ jobs, groups, myGroup, loading, onRefresh }) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                {!Boolean(jobs) ? (
                    <Loader static text="Loading" />
                ) : Object.keys(jobs).length > 0 ? (
                    Object.keys(jobs).map((k) => {
                        return (
                            <Job
                                key={`labor-${k}`}
                                job={jobs[k]}
                                myGroup={myGroup}
                                disabled={loading}
                            />
                        );
                    })
                ) : (
                    <div className={classes.emptyMsg}>No Jobs Available</div>
                )}
            </div>
        </div>
    );
};