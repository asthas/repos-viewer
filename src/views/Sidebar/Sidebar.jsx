import React from 'react';
import styled from 'styled-components';

import RepoList from '../../components/RepoList';

const Wrapper = styled.div`
  background: #FFDE03;
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  min-width: 240px;
  overflow-y: scroll;
`;

const Sidebar = () => (
  <Wrapper>
    <RepoList />
  </Wrapper>
);

export default Sidebar;
