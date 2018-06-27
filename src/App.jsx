import React from 'react';
import { Route } from 'react-router-dom';

import Header from './views/Header';
import Sidebar from './views/Sidebar';
import DetailView from './views/DetailView';

const App = () => (
  <div>
    <Header />
    <Sidebar />
    <Route path="/:repoName?" component={DetailView}/>
  </div>
);

export default App;
