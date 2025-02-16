import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppBar, Grid, Chip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactPlayer from 'react-player';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import JsxParser from 'react-jsx-parser';

import { LightboxImage } from '../../components';
import { useAlert } from '../../hooks';
import { Categories } from './data';
import Nui from '../../util/Nui';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: '#121212',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        background: '#f9a825',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    backButton: {
        color: 'white',
        padding: '8px',
        marginLeft: '-8px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    title: {
        flex: 1,
        fontSize: '18px',
        fontWeight: 500,
    },
    subHeader: {
        padding: '12px 16px',
        backgroundColor: 'rgba(249, 168, 37, 0.8)',
    },
    subsubHeader: {
        padding: '12px 16px',
        backgroundColor: '#1E1E1E',
    },
    body: {
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '3px',
        },
    },
    messageImg: {
        display: 'block',
        maxWidth: '100%',
        borderRadius: '8px',
        margin: '12px 0',
    },
    copyableText: {
        color: '#f9a825',
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
            color: '#f57f17',
        },
    },
    priceValue: {
        fontSize: '20px',
        color: '#4CAF50',
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        '&::before': {
            content: '"$"',
            marginRight: '4px',
        },
    },
    priceNegotiable: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '16px',
    },
    actionButton: {
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.3)',
        },
    },
    categories: {
        padding: '16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    },
    categoryChip: {
        margin: '4px',
        '&:hover': {
            transform: 'translateY(-1px)',
            transition: 'transform 0.2s',
        },
    },
    postedTime: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
    },
}));

const config = [
    {
        regex: /((https?:\/\/(www\.)?(i\.)?imgur\.com\/[a-zA-Z\d]+)(\.png|\.jpg|\.jpeg|\.gif)?)/gim,
        replace: `<LightboxImage className={classes.messageImg} src={"$1"} />`
    },
    {
        regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,
        replace: `<div><ReactPlayer key={key} volume={0.25} width="100%" controls={true} url={"$1"} /></div>`
    }
];

export default (props) => {
    const classes = useStyles();
    const history = useHistory();
    const showAlert = useAlert();
    const { id } = props.match.params;
    const myId = useSelector((state) => state.data.data.player.Source);
    const adverts = useSelector((state) => state.data.data.adverts);
    const advert = useSelector((state) => state.data.data.adverts)[+id];
    const callData = useSelector((state) => state.call.call);

    useEffect(() => {
        if (adverts != null && advert == null) {
            history.replace('/apps/adverts');
        }
    }, [adverts, advert]);

    const cats = Categories.filter((cat) => {
        return advert != null ? advert.categories.includes(cat.label) : [];
    });

    const callAdvert = async () => {
        if (advert.id === myId) return;
        if (callData == null) {
            try {
                const res = await (await Nui.send('CreateCall', {
                    number: advert.number,
                    isAnon: false,
                })).json();
                
                if (res) {
                    history.push(`/apps/phone/call/${advert.number}`);
                } else {
                    showAlert('Unable To Start Call');
                }
            } catch (err) {
                console.log(err);
                showAlert('Unable To Start Call');
            }
        }
    };

    const textAdvert = () => {
        if (advert.id === myId) return;
        history.push(`/apps/messages/convo/${advert.number}`);
    };

    const categoryClick = (category) => {
        history.push(`/apps/adverts/category-view/${category}`);
    };

    let content = advert?.full ?? '';
    config.forEach(c => {
        content = content.replace(c.regex, c.replace);
    });

    return (
        <div className={classes.wrapper}>
            {advert != null && (
                <>
                    <AppBar position="static" className={classes.header}>
                        <IconButton 
                            className={classes.backButton}
                            onClick={() => history.push('/apps/adverts')}
                        >
                            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                        </IconButton>
                        <div className={classes.title}>
                            {advert.title}
                        </div>
                    </AppBar>

                    <AppBar position="static" className={classes.subHeader}>
                        <Grid container alignItems="center">
                            <Grid item xs={6}>
                                {advert.author}
                            </Grid>
                            <Grid item xs={6} style={{ textAlign: 'right' }}>
                                <Moment
                                    className={classes.postedTime}
                                    interval={60000}
                                    fromNow
                                    date={+advert.time}
                                />
                            </Grid>
                        </Grid>
                    </AppBar>

                    <AppBar position="static" className={classes.subsubHeader}>
                        <Grid container alignItems="center">
                            <Grid item xs={8}>
                                {advert.price != null && advert.price !== '' ? (
                                    <NumberFormat
                                        className={classes.priceValue}
                                        value={advert.price}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                    />
                                ) : (
                                    <span className={classes.priceNegotiable}>
                                        Price Negotiable
                                    </span>
                                )}
                            </Grid>
                            <Grid item xs={4} style={{ textAlign: 'right' }}>
                                <IconButton
                                    className={classes.actionButton}
                                    onClick={callAdvert}
                                    disabled={advert.id === myId}
                                >
                                    <FontAwesomeIcon icon={['fas', 'phone']} />
                                </IconButton>
                                <IconButton
                                    className={classes.actionButton}
                                    onClick={textAdvert}
                                    disabled={advert.id === myId}
                                >
                                    <FontAwesomeIcon icon={['fas', 'comment-sms']} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </AppBar>

                    <div className={classes.body}>
                        {advert.full != null && advert.full !== '' ? (
                            <JsxParser
                                autoCloseVoidElements
                                bindings={{ classes }}
                                components={{ LightboxImage, ReactPlayer, CopyToClipboard }}
                                jsx={content}
                                blacklistedTags={['iframe', 'script', 'link', 'applet', 'style']}
                            />
                        ) : (
                            advert.short
                        )}
                    </div>

                    <div className={classes.categories}>
                        <Grid container justifyContent="center">
                            {cats.map((cat, i) => (
                                <Chip
                                    key={`advert-cat-${i}`}
                                    className={classes.categoryChip}
                                    size="small"
                                    style={{
                                        backgroundColor: cat.color,
                                        color: 'white'
                                    }}
                                    label={cat.label}
                                    onClick={() => categoryClick(cat.label)}
                                />
                            ))}
                        </Grid>
                    </div>
                </>
            )}
        </div>
    );
};