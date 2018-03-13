import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';

import Main from './containers';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./containers', () => {
    render();
  });
}
