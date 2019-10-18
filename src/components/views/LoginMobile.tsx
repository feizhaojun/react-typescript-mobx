import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface ILoginMobileProps {
}

interface ILoginMobileState {
}

export default class LoginMobile extends React.Component<ILoginMobileProps, ILoginMobileState> {
  constructor(props: ILoginMobileProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Login Mobile
      </div>
    );
  }
}
