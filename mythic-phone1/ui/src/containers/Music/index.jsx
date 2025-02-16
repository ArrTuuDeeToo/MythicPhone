import React, { useEffect, useState, createRef } from 'react';
import loadscript from 'load-script';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { AppBar } from '@mui/material';
import Nui from '../../util/Nui';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    background: theme.palette.secondary.main,
  },
  content: {
    height: '93.5%',
    padding: '0 0px 0 10px',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ffffff52',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.primary.main,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
  },
  header: {
    background: theme.palette.primary.main,
    fontSize: 20,
    lineHeight: '55px',
    height: 55,
    padding: '0 8px',
  },
  headerInner: {
    display: 'flex',
  },
  appTitle: {
    flex: 1,
  },
  musicContainer: {
    display: "flex",
    flexDirection: "column",
    height: "80%"
  },
  musicWrapper: {
    flexGrow: 1,
    position: 'relative'
  },
  iframeMusic: {
    height: "100%",
    border: "none",
    width: "100%",
    display: 'block'
  },
  volumeControl: {
    textAlign: "center",
    marginTop: "25px"
  },
  volumeLabel: {
    margin: 0
  },
  trackInfo: {
    textAlign: 'center',
    padding: '10px',
    color: theme.palette.text.primary
  }
}));

const PLAYLIST_URL = "https://soundcloud.com/usernamer/sets/playlist";

const MusicPlayer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const [trackInfo, setTrackInfo] = useState(null);
  const [currentVolume, setCurrentVolume] = useState(50);
  const [player, setPlayer] = useState(null);
  const iframeRef = createRef();

  useEffect(() => {
    let mounted = true;

    const initializePlayer = () => {
      loadscript('https://w.soundcloud.com/player/api.js', () => {
        if (!mounted) return;

        const widget = window.SC.Widget(iframeRef.current);
        setPlayer(widget);

        widget.bind(window.SC.Widget.Events.READY, () => {
          widget.setVolume(currentVolume);
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
          setIsPlaying(true);
          updateTrackInfo(widget);
        });

        widget.bind(window.SC.Widget.Events.PAUSE, () => {
          widget.isPaused((paused) => {
            if (paused && mounted) {
              setIsPlaying(false);
              updatePlayerState(false);
            }
          });
        });

        widget.bind(window.SC.Widget.Events.FINISH, () => {
          if (mounted) {
            updatePlayerState(false);
            if (trackInfo) {
              SendRoyalties(trackInfo);
              setTrackInfo(null);
            }
          }
        });
      });
    };

    initializePlayer();

    return () => {
      mounted = false;
    };
  }, []);

  const updateTrackInfo = (widget) => {
    widget.getCurrentSound((sound) => {
      if (!sound) return;
      
      const newTrackInfo = {
        label_name: sound.label_name || sound.user.username,
        title: sound.title,
        genre: sound.genre,
        release_date: sound.release_date,
        id: sound.id
      };
      
      setTrackInfo(newTrackInfo);
      updatePlayerState(true, newTrackInfo);
    });
  };

  const updatePlayerState = (isPlaying, track = trackInfo) => {
    if (!track) return;
    
    dispatch({
      type: 'MUSIC_PROGRESS',
      payload: {
        music: {
          label_name: track.label_name,
          title: track.title,
          id: track.id,
          isPlaying,
        },
      },
    });
  };

  useEffect(() => {
    if (!player) return;

    player.isPaused((playerIsPaused) => {
      if (isPlaying && playerIsPaused) {
        player.play();
      } else if (!isPlaying && !playerIsPaused) {
        player.pause();
      }
    });
  }, [isPlaying]);

  useEffect(() => {
    if (!player) return;

    player.getCurrentSoundIndex((currentIndex) => {
      if (currentIndex !== playlistIndex) {
        player.skip(playlistIndex);
      }
    });
  }, [playlistIndex]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const changePlaylistIndex = (skipForward = true) => {
    if (!player) return;

    player.getSounds((playerSongList) => {
      let nextIndex = skipForward ? playlistIndex + 1 : playlistIndex - 1;

      if (nextIndex < 0) {
        nextIndex = 0;
      } else if (nextIndex >= playerSongList.length) {
        nextIndex = playerSongList.length - 1;
      }

      setPlaylistIndex(nextIndex);
    });
  };

  const changeMusicVolume = (value) => {
    const newVolume = parseInt(value);
    setCurrentVolume(newVolume);
    if (player) {
      player.setVolume(newVolume);
    }
  };

  const SendRoyalties = async (e) => {
    if (!e) return;
    
    let hasSent = false;
    try {
      if (!hasSent) {
        hasSent = true;
        const res = await (
          await Nui.send('Music:SendRoyalties', {
            label_name: e.label_name,
            title: e.title,
            id: e.id
          })
        ).json();

        if (res) {
          console.info('royalties successfully sent.');
        } else {
          console.log('error sending royalties.');
        }
        setTimeout(() => {
          hasSent = false;
        }, 1000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{visibility: props.show ? 'visible' : 'hidden', height: props.show ? '100%' : '0'}}>
      <div style={{backgroundColor: "#252726", height: "100%"}}>
        <AppBar
          position="static"
          className={classes.header}
          elevation={0}
          style={{background: "#63e6be"}}
        >
          <div className={classes.headerInner}>
            <div className={classes.appTitle}>
              Music
            </div>
          </div>
        </AppBar>
        
        {trackInfo && (
          <div className={classes.trackInfo}>
            <div>{trackInfo.title}</div>
            <div style={{ fontSize: '0.8em', opacity: 0.8 }}>{trackInfo.label_name}</div>
          </div>
        )}

        <div className={classes.musicContainer}>
          <div className={classes.musicWrapper}>
            <iframe 
              ref={iframeRef} 
              className={classes.iframeMusic} 
              scrolling="no" 
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${PLAYLIST_URL}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
            />
          </div>
        </div>
        
        <div className={classes.volumeControl}>
          <p className={classes.volumeLabel}>Volume Control</p>
          <input 
            type="range" 
            min="0" 
            step="5" 
            max="100" 
            value={currentVolume}
            onChange={(e) => changeMusicVolume(e.target.value)}
            onClick={(e) => changeMusicVolume(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;