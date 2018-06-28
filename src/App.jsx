import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './views/Header';
import Sidebar from './views/Sidebar';
import DetailView from './views/DetailView';

const Wrapper = styled.div`
  height: 100%;
`

const ContentWrapper = styled.div`
  display: flex;
  background-color: orange;
  height: 100%;
`

const App = () => (
  <Wrapper>
    <Header />
    <ContentWrapper>
      <Sidebar />
      <Route path="/:repoName?" component={DetailView}/>
    </ContentWrapper>
  </Wrapper>
);

export default App;
