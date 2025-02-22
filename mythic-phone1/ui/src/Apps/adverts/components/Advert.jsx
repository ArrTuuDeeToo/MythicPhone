import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Paper, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { useAlert } from '../../../hooks';
import Nui from '../../../util/Nui';
import { Categories } from '../data';

const useStyles = makeStyles((theme) => ({
    convo: {
        width: '100%',
        background: theme.palette.secondary.dark,
        padding: '12px 16px',
        margin: '12px auto',
        transition: 'all 0.3s ease',
        borderRadius: '14px',
        border: '1px solid rgba(255,255,255,0.1)',
        '&:hover': {
            transform: 'translateY(-2px)',
            cursor: 'pointer',
        },
    },
    title: {
        fontSize: '18px',
        fontWeight: 500,
        color: '#f9a825',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    price: {
        color: '#4CAF50',
        fontSize: '16px',
        fontWeight: 500,
        '&::before': {
            content: '"$"',
            marginRight: '2px',
        },
    },
    yours: {
        color: '#f9a825',
        fontSize: '14px',
        marginRight: '4px',
    },
    postedTime: {
        fontSize: '14px',
        color: 'rgba(255,255,255,0.5)',
    },
    authorInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.7)',
    },
    actionButton: {
        padding: '8px',
        color: 'rgba(255,255,255,0.7)',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
        },
    }
}));

const getServiceColor = (categories) => {
    if (categories.includes('Services')) return 'rgba(76, 175, 80, 0.2)';
    if (categories.includes('Want-To-Buy')) return 'rgba(244, 67, 54, 0.2)';
    if (categories.includes('Want-To-Sell')) return 'rgba(33, 150, 243, 0.2)';
    if (categories.includes('Help Wanted')) return 'rgba(255, 152, 0, 0.2)';
    return 'transparent';
};

const AdvertCard = ({ advert }) => {
    const classes = useStyles();
    const history = useHistory();
    const showAlert = useAlert();
    const myId = useSelector((state) => state.data.data.player.Source);
    const callData = useSelector((state) => state.call.call);

    const handleCardClick = (e) => {
        if (!e.target.closest('button')) {
            history.push(`/apps/adverts/view/${advert.id}`);
        }
    };

    const handleCall = async (e) => {
        e.stopPropagation();
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

    const handleMessage = (e) => {
        e.stopPropagation();
        if (advert.id === myId) return;
        history.push(`/apps/messages/convo/${advert.number}`);
    };

    const backgroundColor = getServiceColor(advert.categories);

    return (
        <Paper 
            className={classes.convo} 
            onClick={handleCardClick}
            style={{ backgroundColor }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                    <div className={classes.title}>{advert.title}</div>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    {advert.price ? (
                        <NumberFormat
                            className={classes.price}
                            value={advert.price}
                            displayType={'text'}
                            thousandSeparator={true}
                        />
                    ) : null}
                </Grid>
                <Grid item xs={6}>
                    <Moment
                        className={classes.postedTime}
                        interval={60000}
                        fromNow
                        date={+advert.time}
                    />
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.authorInfo}>
                        {advert.id === myId && (
                            <span className={classes.yours}>(Your Ad)</span>
                        )}
                        <span style={{ marginRight: '8px' }}>{advert.author}</span>
                        {advert.id !== myId && (
                            <>
                                <IconButton
                                    className={classes.actionButton}
                                    onClick={handleCall}
                                    size="small"
                                >
                                    <FontAwesomeIcon icon={['fas', 'phone']} size="xs" />
                                </IconButton>
                                <IconButton
                                    className={classes.actionButton}
                                    onClick={handleMessage}
                                    size="small"
                                >
                                    <FontAwesomeIcon icon={['fas', 'comment-sms']} size="xs" />
                                </IconButton>
                            </>
                        )}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default connect()(AdvertCard);
