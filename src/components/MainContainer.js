import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className="col-span-11 ml-6">
      <div>
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
