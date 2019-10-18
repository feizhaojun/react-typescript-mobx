import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface ILoginLayoutProps {
}

interface ILoginLayoutState {
}

export default class LoginLayout extends React.Component<ILoginLayoutProps, ILoginLayoutState> {
  constructor(props: ILoginLayoutProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Login Layout
      </div>
    );
  }
}
