import React from 'react';
import styled from 'styled-components';

import RepoList from '../../components/RepoList';

const Wrapper = styled.div`
  min-width: 240px;
  overflow-y: scroll;
`;

const Sidebar = () => (
  <Wrapper>
    <RepoList />
  </Wrapper>
);

export default Sidebar;
