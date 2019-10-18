import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../models';
import { isMobile } from '../assets/js/common';

interface IPlaybackProps {
}

interface IPlaybackState {
}

export default class Playback extends React.Component<IPlaybackProps, IPlaybackState> {
  constructor(props: IPlaybackProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <video src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls></video>
      </div>
    );
  }
}
