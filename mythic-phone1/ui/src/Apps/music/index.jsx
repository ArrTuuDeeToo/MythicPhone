import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MusicPlayer from './MusicPlayer';

const Music = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'MUSIC_APP_OPEN',
      payload: {
        show: true
      },
    });
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <MusicPlayer show={true} />
    </div>
  );
};

export default Music;