import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import { Fab } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

import Latest from './Latest';
import Categories from './Categories';
import { DeleteAdvert } from './action';

const YPTabs = withStyles((theme) => ({
    root: {
        borderBottom: '1px solid #f9a825',
        backgroundColor: '#121212',
    },
    indicator: {
        backgroundColor: '#f9a825',
        height: '2px',
    },
}))((props) => <Tabs {...props} />);

const YPTab = withStyles((theme) => ({
    root: {
        width: '50%',
        textTransform: 'none',
        fontSize: '15px',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.7)',
        '&:hover': {
            color: '#f9a825',
            opacity: 1,
        },
        '&$selected': {
            color: '#f9a825',
            fontWeight: 600,
        },
        '&:focus': {
            color: '#f9a825',
        },
    },
    selected: {},
}))((props) => <Tab {...props} />);

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100%',
        background: '#121212',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    header: {
        backgroundColor: '#f9a825',
        padding: '12px 16px',
    },
    headerTitle: {
        fontSize: '18px',
        fontWeight: 500,
        color: 'white',
    },
    headerSubtitle: {
        fontSize: '12px',
        color: 'rgba(255,255,255,0.9)',
    },
    content: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
    },
    tabPanel: {
        height: '100%',
        overflow: 'auto',
        padding: '8px 4px',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    actionButtonsContainer: {
        position: 'absolute',
        right: '16px',
        bottom: '54px', // Adjusted to be 1cm higher
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 10,
    },
    fabButton: {
        opacity: 0.3,
        transition: 'opacity 0.3s ease',
        '&:hover': {
            opacity: 1,
        },
        '&.Mui-disabled': {
            opacity: 0.1,
        },
    },
    delete: {
        backgroundColor: '#f44336 !important', // Red
    },
    add: {
        backgroundColor: '#f9a825 !important', // Yellow
    },
}));

const YellowPages = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const myAdvertId = useSelector((state) => state.data.data.player.Source);
    const myAdvert = useSelector((state) => state.data.data.adverts)[myAdvertId];

    const [tab, setTab] = useState(0);
    const [del, setDel] = useState(false);

    const handleTabChange = (event, newTab) => {
        setTab(newTab);
    };

    const handleDelete = () => {
        if (myAdvert) {
            props.DeleteAdvert(myAdvertId);
            setDel(true);
            setTimeout(() => setDel(false), 1000);
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.headerTitle}>Yellow Pages</div>
                <div className={classes.headerSubtitle}>Local services at your fingertips</div>
            </div>

            <YPTabs 
                value={tab} 
                onChange={handleTabChange} 
                variant="fullWidth"
            >
                <YPTab label="Latest" />
                <YPTab label="Categories" />
            </YPTabs>

            <div className={classes.content}>
                <div 
                    className={classes.tabPanel} 
                    hidden={tab !== 0}
                >
                    {tab === 0 && <Latest del={del} />}
                </div>
                <div 
                    className={classes.tabPanel} 
                    hidden={tab !== 1}
                >
                    {tab === 1 && <Categories />}
                </div>

                {/* Action Buttons */}
                <div className={classes.actionButtonsContainer}>
                    {myAdvert && (
                        <Fab
                            size="medium"
                            className={`${classes.fabButton} ${classes.delete}`}
                            onClick={handleDelete}
                            disabled={del}
                        >
                            <DeleteIcon />
                        </Fab>
                    )}
                    <Fab
                        size="medium"
                        className={`${classes.fabButton} ${classes.add}`}
                        onClick={() => history.push('/apps/adverts/add')}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { DeleteAdvert })(YellowPages);