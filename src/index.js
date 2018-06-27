import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import store from './store';
import addGlobalStyles from './utils/global-styles';

const RepoApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

addGlobalStyles();

ReactDOM.render(<RepoApp />, document.getElementById('root'));
