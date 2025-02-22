import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
    TextField,
    ButtonGroup,
    Button,
    Chip,
    InputAdornment,
    Autocomplete,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAlert } from '../../hooks';
import { UpdateAdvert } from './action';
import { Categories } from './data';
import { Editor } from '../../components';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: theme.palette.secondary.main,
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '16px',
    },
    header: {
        backgroundColor: '#f9a825',
        padding: '12px 16px',
        marginBottom: '20px',
        borderRadius: '8px',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    headerTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '4px',
    },
    headerSubtitle: {
        fontSize: '0.875rem',
        opacity: 0.9,
    },
    formSection: {
        marginBottom: '20px',
    },
    button: {
        width: '-webkit-fill-available',
        padding: '12px 20px',
        color: '#f9a825',
        '&:hover': {
            backgroundColor: 'rgba(249, 168, 37, 0.08)',
        },
    },
    buttonNegative: {
        width: '-webkit-fill-available',
        padding: '12px 20px',
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: `${theme.palette.error.main}14`,
        },
    },
    buttonPositive: {
        width: '-webkit-fill-available',
        padding: '12px 20px',
        color: theme.palette.success.main,
        '&:hover': {
            backgroundColor: `${theme.palette.success.main}14`,
        },
    },
    creatorInput: {
        marginTop: '16px',
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#f9a825',
            },
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#f9a825',
        },
    },
    tagChip: {
        margin: '4px',
        borderRadius: '16px',
        fontWeight: 500,
    },
}));

const initState = {
    title: '',
    short: '',
    full: '',
    time: null,
    tags: Array(),
};

export default connect(null, { UpdateAdvert })((props) => {
    const showAlert = useAlert();
    const classes = useStyles();
    const history = useHistory();
    const player = useSelector((state) => state.data.data.player);
    const advert = useSelector((state) => state.data.data.adverts)[player.Source];

    const [state, setState] = useState({
        title: advert.title,
        short: advert.short,
        full: advert.full,
        price: advert.price,
        tags: Categories.filter((c) => advert.categories.includes(c.label)),
    });

    const onChange = (content) => {
        setState({
            ...state,
            full: content,
        });
    };

    const textChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const onSave = () => {
        let t = Array();
        state.tags.map((tag) => {
            t.push(tag.label);
        });
        props.UpdateAdvert(
            player.Source,
            {
                ...state,
                id: player.Source,
                author: `${player.First} ${player.Last}`,
                number: player.Phone,
                time: Date.now(),
                categories: t,
            },
            () => {
                showAlert('Advert Updated');
                history.goBack();
            },
        );
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.headerTitle}>Edit Advertisement</div>
                <div className={classes.headerSubtitle}>Update your listing details</div>
            </div>

            <div className={classes.formSection}>
                <TextField
                    className={classes.creatorInput}
                    fullWidth
                    label="Title"
                    name="title"
                    variant="outlined"
                    required
                    onChange={textChange}
                    value={state.title}
                    inputProps={{
                        maxLength: 32,
                    }}
                />

                <Autocomplete
                    multiple
                    fullWidth
                    style={{ marginTop: 16 }}
                    value={state.tags}
                    onChange={(event, newValue) => {
                        setState({
                            ...state,
                            tags: [...newValue],
                        });
                    }}
                    options={Categories}
                    getOptionLabel={(option) => option.label}
                    renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                            <Chip
                                label={option.label}
                                className={classes.tagChip}
                                style={{ backgroundColor: option.color, color: 'white' }}
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} label="Categories" variant="outlined" />
                    )}
                />

                <TextField
                    className={classes.creatorInput}
                    fullWidth
                    label="Price (Leave Empty If Negotiable)"
                    name="price"
                    variant="outlined"
                    onChange={textChange}
                    value={state.price}
                    inputProps={{
                        maxLength: 16,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    className={classes.creatorInput}
                    fullWidth
                    required
                    label="Short Description"
                    name="short"
                    variant="outlined"
                    onChange={textChange}
                    value={state.short}
                    inputProps={{
                        maxLength: 64,
                    }}
                />

                <div className={classes.creatorInput}>
                    <Editor
                        value={state.full}
                        onChange={onChange}
                        placeholder="Detailed Description..."
                    />
                </div>
            </div>

            <ButtonGroup variant="text" color="primary" fullWidth>
                <Button
                    className={classes.buttonNegative}
                    onClick={() => history.goBack()}
                >
                    Cancel
                </Button>
                <Button 
                    className={classes.buttonPositive} 
                    onClick={onSave}
                >
                    Update Ad
                </Button>
            </ButtonGroup>
        </div>
    );
});