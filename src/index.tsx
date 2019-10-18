import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/css/common.scss';
import App from './route';
import { Provider } from 'mobx-react';
import store from './models';

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
