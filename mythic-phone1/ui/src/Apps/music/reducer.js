import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicPlayer from './MusicPlayer';

const Music = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.music.show);
  
  useEffect(() => {
    dispatch({
      type: 'MUSIC_APP_OPEN',
      payload: {
        show: true
      },
    });

    return () => {
      dispatch({
        type: 'MUSIC_APP_CLOSED',
        payload: {
          musicPlayerActive: false
        }
      });
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <MusicPlayer show={show} />
    </div>
  );
};

export default Music;