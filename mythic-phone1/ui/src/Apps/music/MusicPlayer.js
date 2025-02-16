import React, { useEffect, useState, createRef } from 'react';
import loadscript from 'load-script';
import { useDispatch } from 'react-redux';
import Nui from '../../util/Nui';

const MusicPlayer = (props) => {
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
          duration: 0,
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

  const headerStyle = {
    background: "#63e6be",
    fontSize: 20,
    lineHeight: '55px',
    height: 55,
    padding: '0 8px',
    position: 'static',
  };

  return (
    <div style={{visibility: props.show ? 'visible' : 'hidden', height: props.show ? '100%' : '0'}}>
      <div style={{backgroundColor: "#252726", height: "100%"}}>
        <div style={headerStyle}>
          <div style={{display: 'flex'}}>
            <div style={{flex: 1}}>
              Music
            </div>
          </div>
        </div>
        
        {trackInfo && (
          <div style={{textAlign: 'center', padding: '10px', color: '#fff'}}>
            <div>{trackInfo.title}</div>
            <div style={{ fontSize: '0.8em', opacity: 0.8 }}>{trackInfo.label_name}</div>
          </div>
        )}

        <div style={{display: "flex", flexDirection: "column", height: "80%"}}>
          <div style={{flexGrow: 1, position: 'relative'}}>
            <iframe 
              ref={iframeRef} 
              style={{height: "100%", border: "none", width: "100%", display: 'block'}} 
              scrolling="no" 
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=https://soundcloud.com/moments-661223256/sets/momentsrp-rockford-records&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
            />
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            padding: '16px',
            marginTop: 'auto' 
          }}>
            <button
              onClick={() => changePlaylistIndex(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Previous
            </button>
            <button
              onClick={togglePlayback}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={() => changePlaylistIndex(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              Next
            </button>
          </div>
        </div>
        
        <div style={{textAlign: "center", marginTop: "25px"}}>
          <p style={{margin: 0}}>Volume Control</p>
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