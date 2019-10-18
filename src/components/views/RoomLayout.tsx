import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface IRoomLayoutProps {
}

interface IRoomLayoutState {
}

export default class RoomLayout extends React.Component<IRoomLayoutProps, IRoomLayoutState> {
  constructor(props: IRoomLayoutProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Room Layout
      </div>
    );
  }
}
