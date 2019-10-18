import React from 'react';
import { inject, observer } from 'mobx-react';
import LoginLayout from '../components/views/LoginLayout';
import LoginMobile from '../components/views/LoginMobile';
import store from '../models';
import { isMobile } from '../assets/js/common';

interface ILoginProps {
}

interface ILoginState {
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    let login = [];
    if (isMobile()) {
      login.push(<LoginMobile />);
    } else {
      login.push(<LoginLayout />);
    }
    return (
      <div>
        {login}
      </div>
    );
  }
}
