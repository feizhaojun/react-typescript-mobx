import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../../models';

interface IIndexLayoutProps {
}

interface IIndexLayoutState {
}

export default class IndexLayout extends React.Component<IIndexLayoutProps, IIndexLayoutState> {
  constructor(props: IIndexLayoutProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    return (
      <div>
        Index Layout
      </div>
    );
  }
}
