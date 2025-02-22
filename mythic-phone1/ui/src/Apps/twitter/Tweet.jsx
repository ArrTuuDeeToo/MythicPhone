import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import processString from 'react-process-string';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactPlayer from 'react-player';
import Moment from 'react-moment';

import Nui from '../../util/Nui';
import { Sanitize } from '../../util/Parser';
import { LightboxImage } from '../../components';
import { useAlert } from '../../hooks';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '12px 16px',
        background: '#192734',
        borderRadius: '16px',
        margin: '8px 0',
        '&:hover': {
            background: '#22303c'
        }
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
    },
    authorInfo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: '50%'
    },
    name: {
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: '500'
    },
    timeStamp: {
        color: '#8899A6',
        fontSize: '14px'
    },
    content: {
        color: '#ffffff',
        fontSize: '15px',
        marginBottom: '12px',
        marginLeft: '50px',
        wordBreak: 'break-word'
    },
    mediaContainer: {
        marginTop: '12px',
        marginBottom: '12px',
        marginLeft: '50px',
        borderRadius: '16px',
        overflow: 'hidden'
    },
    messageImg: {
        maxWidth: '100%',
        borderRadius: '16px',
        border: '1px solid #38444d'
    },
    actionsContainer: {
        display: 'flex',
        gap: '24px',
        justifyContent: 'flex-end',
        marginTop: '8px'
    },
    actionBtn: {
        background: 'none',
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.2s ease',
        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    },
    replyBtn: {
        color: '#1DA1F2',
        '&:hover:not(:disabled)': {
            color: '#1991DA'
        }
    },
    retweetBtn: {
        color: '#17BF63',
        '&:hover:not(:disabled)': {
            color: '#15A856'
        }
    },
    heartBtn: {
        color: '#E0245E',
        '&:hover:not(:disabled)': {
            color: '#C11E51'
        }
    },
    actionCount: {
        fontSize: '13px'
    },
    copyableText: {
        color: '#1DA1F2',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    hashtag: {
        color: '#1DA1F2',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}));

const Tweet = ({ tweet, rtcount, onReply, onRetweet }) => {
    const classes = useStyles();
    const showAlert = useAlert();
    const player = useSelector((state) => state.data.data.player);
    const [favd, setFavd] = useState(false);

    const onFavorite = async () => {
        if (favd) return;
        setFavd(true);
        try {
            await Nui.send('FavoriteTweet', {
                id: tweet._id,
                state: tweet.likes.includes(player.ID)
            });
        } catch (err) {
            console.error(err);
        } finally {
            setFavd(false);
        }
    };

    const config = [
        {
            regex: /((https?:\/\/(www\.)?(i\.)?imgur\.com\/[a-zA-Z\d]+)(\.png|\.jpg|\.jpeg|\.gif)?)/gim,
            fn: (key, result) => (
                <LightboxImage
                    key={key}
                    className={classes.messageImg}
                    src={result[0]}
                />
            )
        },
        {
            regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)(mp4)/gim,
            fn: (key, result) => (
                <div key={key} className={classes.mediaContainer}>
                    <ReactPlayer
                        width="100%"
                        height="auto"
                        controls={true}
                        url={result[0]}
                        volume={0.25}
                    />
                </div>
            )
        },
        {
            regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
            fn: (key, result) => (
                <CopyToClipboard 
                    key={key} 
                    text={result[0]}
                    onCopy={() => showAlert('Link Copied To Clipboard')}
                >
                    <a className={classes.copyableText}>{result.input}</a>
                </CopyToClipboard>
            )
        },
        {
            regex: /#(\w)+/g,
            fn: (key, result) => (
                <span key={key} className={classes.hashtag}>
                    {result[0]}
                </span>
            )
        },
        {
            regex: /@(\w)+/g,
            fn: (key, result) => (
                <span key={key} className={classes.hashtag}>
                    {result[0]}
                </span>
            )
        }
    ];

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.authorInfo}>
                    <Avatar 
                        className={classes.avatar}
                        src={tweet.author.avatar}
                        alt={tweet.author.name}
                    />
                    <span className={classes.name}>{tweet.author.name}</span>
                </div>
                <span className={classes.timeStamp}>
                    <Moment fromNow>{tweet.time}</Moment>
                </span>
            </div>

            <div className={classes.content}>
                {processString(config)(Sanitize(tweet.content))}
            </div>

            {tweet.image.using && (
                <div className={classes.mediaContainer}>
                    <LightboxImage
                        src={tweet.image.link}
                        className={classes.messageImg}
                    />
                </div>
            )}

            <div className={classes.actionsContainer}>
                <button 
                    className={`${classes.actionBtn} ${classes.replyBtn}`}
                    onClick={() => onReply(tweet.author.name)}
                    disabled={!player.Alias.twitter}
                >
                    <FontAwesomeIcon icon={['fas', 'reply']} />
                    <span className={classes.actionCount}>0</span>
                </button>
                
                <button 
                    className={`${classes.actionBtn} ${classes.retweetBtn}`}
                    onClick={() => onRetweet(tweet)}
                    disabled={
                        !player.Alias.twitter ||
                        tweet.retweet ||
                        tweet.cid === player.ID
                    }
                >
                    <FontAwesomeIcon icon={['fas', 'retweet']} />
                    <span className={classes.actionCount}>{rtcount}</span>
                </button>
                
                <button 
                    className={`${classes.actionBtn} ${classes.heartBtn}`}
                    onClick={onFavorite}
                    disabled={!player.Alias.twitter || favd}
                >
                    <FontAwesomeIcon icon={['fas', 'heart']} />
                    <span className={classes.actionCount}>{tweet.likes.length}</span>
                </button>
            </div>
        </div>
    );
};

export default Tweet;