import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress } from '@material-ui/core';

import './editor.css';
import Advert from './components/Advert';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '8px 4px',
    },
    emptyWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.text.secondary,
    },
    emptyMsg: {
        width: '100%',
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#f9a825',
        marginTop: '8px',
    },
    emptyIcon: {
        fontSize: '3rem',
        color: '#f9a825',
        opacity: 0.5,
        marginBottom: '16px',
    },
    emptySubtext: {
        fontSize: '0.875rem',
        color: theme.palette.text.secondary,
        marginTop: '8px',
        textAlign: 'center',
    },
    loadingWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    advertsWrapper: {
        '& > *:not(:last-child)': {
            marginBottom: '12px',
        },
    }
}));

const Latest = ({ del }) => {
    const classes = useStyles();
    const adverts = useSelector((state) => state.data.data.adverts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state for smoother transitions
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const filtered = Object.keys(adverts || {}).filter((a) => a !== '0');
    const sortedAdverts = filtered.sort((a, b) => {
        let aItem = adverts[a];
        let bItem = adverts[b];
        return bItem.time - aItem.time;
    });

    if (loading) {
        return (
            <div className={classes.loadingWrapper}>
                <CircularProgress style={{ color: '#f9a825' }} />
            </div>
        );
    }

    if (!filtered.length) {
        return (
            <div className={classes.emptyWrapper}>
                <FontAwesomeIcon 
                    icon={['fas', 'newspaper']} 
                    className={classes.emptyIcon}
                />
                <div className={classes.emptyMsg}>
                    No Advertisements
                </div>
                <div className={classes.emptySubtext}>
                    Be the first to post an advertisement!
                </div>
            </div>
        );
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.advertsWrapper}>
                {sortedAdverts.map((ad, i) => (
                    <Advert
                        key={`advert-${i}`}
                        advert={adverts[ad]}
                        del={del}
                    />
                ))}
            </div>
        </div>
    );
};

export default connect()(Latest);