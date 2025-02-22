import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Categories } from './data';
import ActionButtons from './ActionButtons';
import Advert from './components/Advert';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column'
    },
    adsWrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '0 10px'
    },
    header: {
        width: '100%',
        padding: '12px 16px',
        fontSize: 20,
        height: 60,
        borderBottom: `1px solid ${theme.palette.text.main}`,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    title: {
        width: 'fit-content',
        height: 'fit-content',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 16,
        margin: 'auto',
        color: '#FFFFFF',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    noAds: {
        textAlign: 'center',
        padding: '40px 20px',
        color: theme.palette.text.secondary,
        fontSize: '1.1rem'
    }
}));

export default connect()((props) => {
    const classes = useStyles();
    const { category } = props.match.params;
    const catData = Categories.filter((cat) => cat.label === category)[0];
    const adverts = useSelector((state) => state.data.data.adverts);

    const [filtered, setFiltered] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let t = {};
        Object.keys(adverts || {})
            .filter(a => a !== '0')
            .forEach((a) => {
                let ad = adverts[a];
                if (ad.categories.includes(category)) {
                    t[a] = ad;
                }
            });
        setFiltered(t);
        setLoading(false);
    }, [adverts, category]);

    // Sort function for advertisements
    const sortedAds = Object.keys(filtered)
        .filter((a) => a !== '0')
        .sort((a, b) => {
            let aItem = filtered[a];
            let bItem = filtered[b];
            return bItem.time - aItem.time;
        });

    return (
        <div className={classes.wrapper}>
            <Grid
                container
                className={classes.header}
                style={{ 
                    backgroundColor: catData.color,
                    background: `linear-gradient(to right, ${catData.color}, ${catData.color}dd)`
                }}
            >
                <Grid item xs={12} style={{ position: 'relative' }}>
                    <div className={classes.title}>
                        <FontAwesomeIcon
                            icon={getCategoryIcon(category)}
                            style={{ fontSize: '1.2rem' }}
                        />
                        {catData.label}
                    </div>
                </Grid>
            </Grid>

            <div className={classes.adsWrapper}>
                {loading ? (
                    <div className={classes.noAds}>
                        Loading advertisements...
                    </div>
                ) : sortedAds.length > 0 ? (
                    sortedAds.map((ad, i) => (
                        <Advert
                            key={`advert-${i}`}
                            advert={filtered[ad]}
                            del={props.del}
                        />
                    ))
                ) : (
                    <div className={classes.noAds}>
                        No advertisements found in this category
                    </div>
                )}
            </div>
            
            <ActionButtons />
        </div>
    );
});

// Helper function to get category icon
const getCategoryIcon = (categoryLabel) => {
    switch(categoryLabel) {
        case 'Services':
            return ['fas', 'briefcase'];
        case 'Want-To-Buy':
            return ['fas', 'shopping-cart'];
        case 'Want-To-Sell':
            return ['fas', 'tag'];
        case 'Help Wanted':
            return ['fas', 'users'];
        default:
            return ['fas', 'folder'];
    }
};