import React from 'react';
import { inject, observer } from 'mobx-react';
import store from '../models';
import IndexLayout from '../components/views/IndexLayout';
import IndexMobile from '../components/views/IndexMobile';
import { isMobile } from '../assets/js/common';

interface IIndexProps {
}

interface IIndexState {
}

export default class Index extends React.Component<IIndexProps, IIndexState> {
  constructor(props: IIndexProps) {
    super(props);
    this.state = {
    };
  }
  
  public componentDidMount() {
  }

  render() {
    let index = [];
    if (isMobile()) {
      index.push(<IndexMobile />);
    } else {
      index.push(<IndexLayout />);
    }
    return (
      <div>
        {index}
      </div>
    );
  }
}
