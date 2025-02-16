import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
    TextField,
    ButtonGroup,
    Button,
    Chip,
    InputAdornment,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAlert } from '../../hooks';
import { CreateAdvert } from './action';
import { Categories } from './data';
import { Editor } from '../../components';

const useStyles = makeStyles(() => ({
    wrapper: {
        height: '100%',
        background: '#121212',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    content: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        paddingBottom: '80px',
    },
    inputField: {
        marginBottom: '16px',
    },
    categoryContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
    },
    categoryButton: {
        borderRadius: '20px',
        textTransform: 'none',
        padding: '8px 16px',
        fontSize: '14px',
        fontWeight: 500,
        '&.selected': {
            backgroundColor: '#f9a825',
            color: 'white',
        },
    },
    editorContainer: {
        marginTop: '16px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: '34px',
        left: 0,
        right: 0,
        padding: '0 16px',
        display: 'flex',
        gap: '8px',
    },
    button: {
        flex: 1,
        padding: '12px',
        fontSize: '14px',
        fontWeight: 500,
        borderRadius: '4px',
    },
    cancelButton: {
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.23)',
        color: 'white',
    },
    createButton: {
        backgroundColor: '#f9a825',
        color: 'white',
    },
}));

const AddAdvertisement = ({ CreateAdvert }) => {
    const classes = useStyles();
    const showAlert = useAlert();
    const history = useHistory();
    const player = useSelector((state) => state.data.data.player);

    const [formData, setFormData] = useState({
        title: '',
        short: '',
        full: '',
        price: '',
        tags: [],
    });

    const toggleCategory = (category) => {
        setFormData((prev) => {
            const isSelected = prev.tags.includes(category);
            return {
                ...prev,
                tags: isSelected
                    ? prev.tags.filter((tag) => tag !== category)
                    : [...prev.tags, category],
            };
        });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEditorChange = (content) => {
        setFormData({ ...formData, full: content });
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.short || formData.tags.length === 0) {
            showAlert('Please fill in all required fields');
            return;
        }

        CreateAdvert(
            player.Source,
            {
                ...formData,
                id: player.Source,
                author: `${player.First} ${player.Last}`,
                number: player.Phone,
                time: Date.now(),
                categories: formData.tags,
            },
            () => {
                showAlert('Advertisement Created');
                history.goBack();
            },
        );
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <TextField
                    className={classes.inputField}
                    fullWidth
                    label="Title"
                    name="title"
                    variant="outlined"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <div className={classes.categoryContainer}>
                    {Categories.map((category) => (
                        <Button
                            key={category.label}
                            className={`${classes.categoryButton} ${formData.tags.includes(category.label) ? 'selected' : ''}`}
                            onClick={() => toggleCategory(category.label)}
                            style={{ backgroundColor: formData.tags.includes(category.label) ? '#f9a825' : 'transparent', color: formData.tags.includes(category.label) ? 'white' : 'inherit' }}
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                <TextField
                    className={classes.inputField}
                    fullWidth
                    label="Price (Leave Empty If Negotiable)"
                    name="price"
                    variant="outlined"
                    value={formData.price}
                    onChange={handleInputChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    className={classes.inputField}
                    fullWidth
                    label="Short Description"
                    name="short"
                    variant="outlined"
                    required
                    value={formData.short}
                    onChange={handleInputChange}
                />

                <div className={classes.editorContainer}>
                    <Editor
                        value={formData.full}
                        onChange={handleEditorChange}
                        placeholder="Detailed Description..."
                    />
                </div>
            </div>

            <div className={classes.buttonsContainer}>
                <Button className={classes.cancelButton} onClick={() => history.goBack()}>
                    Cancel
                </Button>
                <Button className={classes.createButton} onClick={handleSubmit}>
                    Create Advertisement
                </Button>
            </div>
        </div>
    );
};

export default connect(null, { CreateAdvert })(AddAdvertisement);