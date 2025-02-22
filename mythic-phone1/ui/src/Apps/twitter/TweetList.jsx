import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    TextField, 
    AppBar, 
    IconButton, 
    Grid, 
    Pagination 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nui from '../../util/Nui';
import { Confirm, Modal } from '../../components';
import { useAlert } from '../../hooks';
import Tweet from './Tweet';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#15202B',
    },
    header: {
        background: '#15202B',
        boxShadow: 'none',
        borderBottom: '1px solid #38444D',
        padding: '12px 16px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: 'bold',
        lineHeight: '24px'
    },
    headerAction: {
        color: '#1DA1F2',
        '&:hover': {
            backgroundColor: 'rgba(29, 161, 242, 0.1)'
        },
        '&.Mui-disabled': {
            color: 'rgba(255, 255, 255, 0.3)'
        }
    },
    tweetList: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '0 16px',
        '&::-webkit-scrollbar': {
            width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#38444D',
            borderRadius: 3,
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#1DA1F2',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        }
    },
    modal: {
        '& .MuiPaper-root': {
            background: '#15202B',
            color: '#FFFFFF',
            borderRadius: '16px',
        }
    },
    modalTitle: {
        borderBottom: '1px solid #38444D',
        padding: '16px',
        color: '#FFFFFF'
    },
    editField: {
        marginBottom: 15,
        '& .MuiInputBase-root': {
            color: '#FFFFFF',
            fontSize: '20px',
        },
        '& .MuiInputLabel-root': {
            color: '#8899A6',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#38444D',
            },
            '&:hover fieldset': {
                borderColor: '#1DA1F2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#1DA1F2',
            }
        },
        '& .MuiFormHelperText-root': {
            color: '#8899A6'
        }
    },
    preview: {
        width: '100%',
        maxWidth: 400,
        margin: '16px auto',
        borderRadius: '16px',
        border: '1px solid #38444D'
    },
    pagination: {
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-root': {
            color: '#FFFFFF',
            borderColor: '#38444D',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
            },
            '&.Mui-selected': {
                backgroundColor: '#1DA1F2',
                '&:hover': {
                    backgroundColor: '#1A91DA'
                }
            }
        }
    }
}));

const TweetList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showAlert = useAlert();
    const tweets = useSelector((state) => state.data.data.tweets);
    const player = useSelector((state) => state.data.data.player);

    const pages = tweets ? Math.ceil(tweets.length / 20) : 0;
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [state, setState] = useState({
        tweet: '',
        usingImg: false,
        imgLink: '',
    });
    const [pendingRetweet, setPendingRetweet] = useState(null);

    const onStateChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const toggleImage = () => {
        setState({
            ...state,
            imgLink: '',
            usingImg: !state.usingImg,
        });
    };

    const onReply = (name) => {
        setState({
            ...state,
            tweet: `@${name} `,
        });
        setOpen(true);
    };

    const confirmRetweet = (tweet) => {
        setPendingRetweet(tweet);
    };

    const onRetweet = async () => {
        const retweet = {
            ...pendingRetweet,
            author: player.Alias.twitter,
            content: `<b>RETWEET</b> @${pendingRetweet.author.name} "${pendingRetweet.content}"`,
            time: Date.now(),
            retweet: pendingRetweet._id,
            likes: [],
        };

        const success = await sendTweet(retweet);
        setPendingRetweet(null);
        showAlert(success ? 'Retweeted' : 'Unable to Retweet');
    };

    const sendTweet = async (tweet) => {
        try {
            const res = await (await Nui.send('SendTweet', tweet)).json();
            if (res) {
                setOpen(false);
                setState({
                    tweet: '',
                    usingImg: false,
                    imgLink: '',
                });
                return true;
            }
            return false;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const onCreate = async () => {
        const tweet = {
            time: Date.now(),
            content: state.tweet,
            image: {
                using: state.usingImg,
                link: state.imgLink,
            },
            likes: [],
        };

        const success = await sendTweet(tweet);
        showAlert(success ? 'Tweet Created' : 'Unable to Create Tweet');
    };

    return (
        <div className={classes.wrapper}>
            <AppBar position="static" className={classes.header}>
                <Grid container alignItems="center">
                    <Grid item xs={8}>
                        <span className={classes.headerTitle}>Twatter</span>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <IconButton
                            onClick={() => setOpen(true)}
                            disabled={!player.Alias.twitter}
                            className={classes.headerAction}
                        >
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>

            <div className={classes.tweetList}>
                {tweets
                    .sort((a, b) => b.time - a.time)
                    .slice((page - 1) * 20, page * 20)
                    .map((tweet) => (
                        <Tweet
                            key={tweet._id}
                            tweet={tweet}
                            rtcount={tweets.filter((t) => t.retweet === tweet._id).length}
                            onReply={onReply}
                            onRetweet={confirmRetweet}
                        />
                    ))}
                
                {pages > 1 && (
                    <div className={classes.pagination}>
                        <Pagination
                            count={pages}
                            page={page}
                            onChange={(_, value) => setPage(value)}
                            variant="outlined"
                            color="primary"
                        />
                    </div>
                )}
            </div>

            <Modal
                className={classes.modal}
                open={open}
                title="New Tweet"
                onClose={() => setOpen(false)}
                onAccept={onCreate}
                onDelete={toggleImage}
                submitLang="Tweet"
                deleteLang={state.usingImg ? 'Remove Image' : 'Attach Image'}
                closeLang="Cancel"
            >
                <TextField
                    className={classes.editField}
                    label="What's happening?"
                    name="tweet"
                    type="text"
                    fullWidth
                    multiline
                    required
                    helperText={`${state.tweet.length} / 180 characters`}
                    value={state.tweet}
                    onChange={onStateChange}
                    variant="outlined"
                    inputProps={{
                        maxLength: 180,
                    }}
                />
                
                {state.usingImg && (
                    <>
                        {state.imgLink && (
                            <img
                                src={state.imgLink}
                                alt="Preview"
                                className={classes.preview}
                            />
                        )}
                        <TextField
                            className={classes.editField}
                            label="Image URL"
                            name="imgLink"
                            helperText="Imgur Links Only"
                            type="text"
                            fullWidth
                            required
                            value={state.imgLink}
                            onChange={onStateChange}
                            variant="outlined"
                        />
                    </>
                )}
            </Modal>

            <Confirm
                open={pendingRetweet !== null}
                title="Retweet this Tweet?"
                confirm="Retweet"
                decline="Cancel"
                onConfirm={onRetweet}
                onDecline={() => setPendingRetweet(null)}
            />
        </div>
    );
};

export default TweetList;