import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Avatar,
    TextField,
    Paper,
    AppBar,
    Grid,
    IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import Nui from '../../util/Nui';
import { useAlert } from '../../hooks';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '89%',
        background: '#15202B',
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
            background: theme.palette.primary.main,
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
    },
    header: {
        background: '#15202B',
        fontSize: 20,
        padding: '12px 16px',
        height: 'auto',
        color: '#fff',
        borderBottom: '1px solid #38444D',
    },
    headerAction: {
        color: theme.palette.primary.main,
    },
    avatar: {
        height: 150,
        width: 150,
        fontSize: 50,
        color: '#fff',
        background: theme.palette.primary.main,
        borderRadius: '50%',
        margin: '24px auto',
        '&.pending': {
            border: `3px solid ${theme.palette.warning.main}`,
        },
    },
    contactHeader: {
        padding: '32px 20px',
        background: '#192734',
        width: '100%',
        margin: '24px auto',
        borderRadius: 16,
        textAlign: 'center',
        position: 'relative',
    },
    editField: {
        width: '100%',
        marginBottom: 20,
        '& .MuiInputBase-root': {
            color: '#fff',
        },
        '& .MuiInputLabel-root': {
            color: '#8899A6',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#38444D',
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
        },
        '& .MuiFormHelperText-root': {
            color: '#8899A6',
        },
    },
    fields: {
        paddingTop: 80,
    },
}));

const MyProfile = () => {
    const showAlert = useAlert();
    const classes = useStyles();
    const dispatch = useDispatch();
    const player = useSelector((state) => state.data.data.player);

    const [oProfile, setOProfile] = useState({
        name: player.Alias.twitter ? player.Alias.twitter.name : '',
        avatar: player.Alias.twitter ? player.Alias.twitter.avatar : '',
    });

    const [profile, setProfile] = useState({
        name: player.Alias.twitter ? player.Alias.twitter.name : '',
        avatar: player.Alias.twitter ? player.Alias.twitter.avatar : '',
    });

    const onChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            let res = await (
                await Nui.send('UpdateAlias', {
                    app: 'twitter',
                    alias: profile,
                    unique: true,
                })
            ).json();
            
            if (res) {
                dispatch({
                    type: 'UPDATE_DATA',
                    payload: {
                        type: 'player',
                        id: 'Alias',
                        key: 'twitter',
                        data: profile,
                    },
                });
                showAlert('Profile Updated');
            } else {
                showAlert('Unable To Update Profile');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form id="profile-form" onSubmit={onSubmit}>
            <AppBar position="static" className={classes.header}>
                <Grid container>
                    <Grid item xs={8} style={{ lineHeight: '50px' }}>
                        Profile Settings
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                        <IconButton
                            type="submit"
                            className={classes.headerAction}
                        >
                            <FontAwesomeIcon icon={['fas', 'floppy-disks']} />
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
            <div className={classes.wrapper}>
                <Paper className={classes.contactHeader}>
                    {Boolean(profile.avatar) ? (
                        <Avatar
                            className={`${classes.avatar}${
                                !_.isEqual(oProfile, profile) ? ' pending' : ''
                            }`}
                            src={profile.avatar}
                            alt={profile.name.charAt(0)}
                        />
                    ) : (
                        <Avatar
                            className={`${classes.avatar}${
                                !_.isEqual(oProfile, profile) ? ' pending' : ''
                            }`}
                        >
                            <FontAwesomeIcon icon={['fas', 'user']} />
                        </Avatar>
                    )}
                    <div className={classes.fields}>
                        <TextField
                            required
                            className={classes.editField}
                            label="Username"
                            name="name"
                            type="text"
                            onChange={onChange}
                            value={profile.name}
                            variant="outlined"
                            inputProps={{
                                pattern: '[a-zA-Z0-9_-]+',
                            }}
                        />
                        <TextField
                            className={classes.editField}
                            label="Avatar URL"
                            name="avatar"
                            type="text"
                            onChange={onChange}
                            value={profile.avatar}
                            variant="outlined"
                            helperText="Enter the URL of your avatar image"
                        />
                    </div>
                </Paper>
            </div>
        </form>
    );
};

export default MyProfile;