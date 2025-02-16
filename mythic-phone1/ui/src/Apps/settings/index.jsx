import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Grid,
  Avatar,
  Button,
  ButtonGroup,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomToggle.css';

// Custom Hook for styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    background: 'linear-gradient(180deg, #000000 0%, #1C1C1E 100%)',
    paddingTop: theme.spacing(1),
    overflowY: 'auto',
    fontFamily: 'Poppins, sans-serif',
  },
  sectionBox: {
    width: '90%',
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    marginBottom: 20,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    marginLeft: '5%',
    paddingBottom: 20,
  },
  personalInfoWrapper: {
    width: '90%',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
    marginLeft: '5%',
    marginTop: 20,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  settingsSection: {
    backgroundColor: '#1C1C1E',
    padding: '10px 20px',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#333',
    },
    marginLeft: 10,
    marginTop: 10,
    width: '95%',
  },
  avatar: {
    color: '#FFFFFF',
    height: 50,
    width: 50,
    fontSize: 24,
    borderRadius: '50%',
    marginRight: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  avatarIcon: {
    fontSize: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  arrow: {
    fontSize: 18,
    color: '#C8C8CC',
  },
  toggle: {
    fontSize: 18,
    color: '#007AFF',
  },
  squareAvatar: {
    borderRadius: 8,
    height: 45,
    width: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalDetailsText: {
    fontSize: '15px',
    color: '#8E8E93',
  },
  personalName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statusText: {
    fontSize: '15px',
    color: '#8E8E93',
  },
}));

const CustomToggle = ({ checked, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  return (
    <label>
      <input type="checkbox" className="checkbox" checked={isOn} onChange={toggleSwitch} />
      <div className={`switch ${isOn ? 'switchOn' : ''}`} onClick={toggleSwitch}></div>
    </label>
  );
};

const CategorySection = ({ title, items, onItemClick }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.sectionBox}>
      <div className={classes.settingsGroup}>
        <div className={classes.sectionHeader}>{title}</div>
        {items.map((item, index) => (
          <Paper
            key={index}
            className={classes.settingsSection}
            onClick={() => onItemClick(item)}
          >
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: item.color }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', item.icon]} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>{item.text}</div>
                {item.status && (
                  <div className={classes.statusText}>
                    {item.status}
                  </div>
                )}
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>
        ))}
      </div>
    </div>
  );
};

const SettingsPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const settings = useSelector((state) => state.data.data.player.PhoneSettings);
  const player = useSelector((state) => state.data.data.player);
  const [notifs, setNotifs] = useState(settings.notifications);
  const [scale, setScale] = useState(settings.scale || 1);

  const navigate = (path) => {
    history.push(`/apps/settings/${path}`);
  };

  const toggleNotifs = () => {
    props.UpdateSetting('notifications', !notifs);
    setNotifs(!notifs);
  };

  const handleScaleChange = (e) => {
    const newScale = parseFloat(e.target.value);
    setScale(newScale);
    props.UpdateSetting('scale', newScale);
  };

  const volumeAdd = (e) => {
    e.preventDefault();
    if (settings.volume < 100) props.UpdateSetting('volume', settings.volume + 5);
  };

  const volumeMinus = (e) => {
    e.preventDefault();
    if (settings.volume >= 5) props.UpdateSetting('volume', settings.volume - 5);
  };

  const toggleMute = (e) => {
    e.preventDefault();
    if (settings.volume === 0) props.UpdateSetting('volume', 100);
    else props.UpdateSetting('volume', 0);
  };

  const category2Items = [
    { icon: 'bell-on', text: 'Notifications', color: '#34C759' },
    { icon: 'bell-on', text: 'Application Notifications', color: '#5856D6' },
    { icon: 'volume-high', text: 'Volume', color: '#32D74B' },
    { icon: 'image', text: 'Wallpaper', color: '#FF9500' },
    { icon: 'palette', text: 'Colors', color: '#6A1B9A' },
    { icon: 'expand', text: 'Scale', color: '#007AFF' },
  ];

  const handleSettingClick = (item) => {
    if (item.text === 'Notifications') {
      toggleNotifs();
    } else if (item.text === 'Volume') {
      console.log('Volume settings not implemented yet.');
    } else {
      navigate(item.text.toLowerCase().replace(/\s+/g, '_'));
    }
  };

  return (
    <div className={classes.wrapper}>
      <Grid container direction="column">
        {/* Personal Info Section */}
        <Paper className={classes.personalInfoWrapper} onClick={() => navigate('profile')}>
          <Grid container alignItems="center">
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'user']} />
            </Avatar>
            <Grid item xs>
              <div className={classes.personalName}>{`${player.First} ${player.Last}`}</div>
              <div className={classes.personalDetailsText}>Contact Information & Personal Information</div>
            </Grid>
            <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
          </Grid>
        </Paper>

        {/* Additional Settings */}
        <div className={classes.sectionBox}>
          <Paper className={classes.settingsSection} onClick={() => navigate('app_notifs')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#5856D6' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'bell-on']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Application Notifications</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#32D74B' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'volume-high']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Volume</div>
              </Grid>
              <ButtonGroup>
                <Button onClick={toggleMute} style={{ color: settings.volume === 0 ? '#FF3B30' : '#32D74B' }}>
                  <FontAwesomeIcon icon={settings.volume === 0 ? ['fas', 'volume-mute'] : ['fas', 'volume-high']} />
                </Button>
                <Button onClick={volumeMinus} style={{ color: '#FF9500' }}>
                  <FontAwesomeIcon icon={['fas', 'minus']} />
                </Button>
                <Button onClick={volumeAdd} style={{ color: '#007AFF' }}>
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </ButtonGroup>
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection} onClick={() => navigate('wallpaper')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#FF9500' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'image']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Wallpaper</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection} onClick={() => navigate('colors')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#6A1B9A' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'palette']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Colors</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#007AFF' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'expand']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Scale</div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                  <input
                    type="range"
                    min={0.5}
                    max={1.5}
                    step={0.1}
                    value={scale}
                    onChange={(e) => handleScaleChange(e)}
                    style={{
                      width: '80%',
                      height: '4px',
                      background: '#333',
                      borderRadius: '2px',
                      outline: 'none',
                      opacity: '0.7',
                      transition: 'opacity .2s'
                    }}
                  />
                  <span style={{ marginLeft: '10px', color: '#8E8E93' }}>
                    {Math.round(scale * 100)}%
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>

        {/* Category Sections */}
        <CategorySection title="Settings" items={category2Items} onItemClick={handleSettingClick} />

        {/* Device Information Section */}
        <div className={classes.sectionBox}>
          <Paper className={classes.settingsSection}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#007AFF' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'info-circle']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Device Information</div>
                <div className={classes.personalDetailsText}>
                  <div>Model:Phone</div>
                  <div>OS Version:RP</div>
                  <div>Storage: 128 mb</div>
                  <div>Battery: 4%</div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default SettingsPage;