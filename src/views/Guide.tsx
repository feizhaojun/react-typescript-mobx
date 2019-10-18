import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Link } from "react-router-dom";

export default class Index extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div>
        <div><Link to="/">Guide</Link></div>
        <div><Link to="/index">Index: 首页</Link></div>
        <div><Link to="/login">Login: 登陆</Link></div>
        <div><Link to="/room">Room: 教室</Link></div>
        <div><Link to="/playback">Playback: 回放</Link></div>
      </div>
    );
  }
}
