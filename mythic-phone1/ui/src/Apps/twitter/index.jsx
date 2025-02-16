import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TweetList from './TweetList';
import MyProfile from './MyProfile';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#15202B',
        position: 'relative',
    },
    content: {
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '80px', // Increased margin to accommodate repositioned buttons
    },
    tabContent: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
        backgroundColor: '#15202B',
    },
    hidden: {
        opacity: 0,
        pointerEvents: 'none',
        transform: 'translateX(20px)',
    },
    visible: {
        opacity: 1,
        pointerEvents: 'auto',
        transform: 'translateX(0)',
    },
    navContainer: {
        position: 'absolute',
        bottom: '65px', // Adjusted to position above footer
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        backgroundColor: '#15202B',
        borderRadius: '12px',
        border: '1px solid #38444D',
        height: '50px',
        zIndex: 1000,
        width: '60%', // Adjust width to fit within phone frame
        justifyContent: 'space-around',
        padding: '5px',
    },
    navButton: {
        flex: 'none',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#8899A6',
        transition: 'color 0.2s ease',
        position: 'relative',
        borderRadius: '50%',
        '&:hover': {
            color: '#1DA1F2',
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
        },
        '&.active': {
            color: '#1DA1F2',
        },
    },
    icon: {
        fontSize: '18px',
    },
}));

const Index = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const activeTab = useSelector((state) => state.twitter.tab);

    const handleTabChange = (tab) => {
        dispatch({
            type: 'SET_TWITTER_TAB',
            payload: { tab },
        });
    };

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <div
                    className={`${classes.tabContent} ${activeTab === 0 ? classes.visible : classes.hidden}`}
                    role="tabpanel"
                    id="feed"
                >
                    <TweetList />
                </div>
                <div
                    className={`${classes.tabContent} ${activeTab === 1 ? classes.visible : classes.hidden}`}
                    role="tabpanel"
                    id="profile"
                >
                    <MyProfile />
                </div>
            </div>
            
            <nav className={classes.navContainer}>
                <button
                    className={`${classes.navButton} ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabChange(0)}
                    aria-label="Home"
                >
                    <FontAwesomeIcon 
                        icon={['fas', 'home']} 
                        className={classes.icon} 
                    />
                </button>
                <button
                    className={`${classes.navButton} ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabChange(1)}
                    aria-label="Profile"
                >
                    <FontAwesomeIcon 
                        icon={['fas', 'user']} 
                        className={classes.icon} 
                    />
                </button>
            </nav>
        </div>
    );
};

export default Index;