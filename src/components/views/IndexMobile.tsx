import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface IIndexMobileProps {
}

interface IIndexMobileState {
}

export default class IndexMobile extends React.Component<IIndexMobileProps, IIndexMobileState> {
  constructor(props: IIndexMobileProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Index Mobile
      </div>
    );
  }
}
