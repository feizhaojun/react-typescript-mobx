import React from 'react';
import { inject, observer } from 'mobx-react';
import RoomLayout from '../components/views/IndexLayout';
import RoomMobile from '../components/views/IndexMobile';
import store from '../models';
import { isMobile } from '../assets/js/common';

interface IRoomProps {
}

interface IRoomState {
}

export default class Room extends React.Component<IRoomProps, IRoomState> {
  constructor(props: IRoomProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    let room = [];
    if (isMobile()) {
      room.push(<RoomMobile />);
    } else {
      room.push(<RoomLayout />);
    }
    return (
      <div>
        {room}
      </div>
    );
  }
}
