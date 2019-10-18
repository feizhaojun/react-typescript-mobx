import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface IRoomMobileProps {
}

interface IRoomMobileState {
}

export default class RoomMobile extends React.Component<IRoomMobileProps, IRoomMobileState> {
  constructor(props: IRoomMobileProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Room Mobile
      </div>
    );
  }
}
