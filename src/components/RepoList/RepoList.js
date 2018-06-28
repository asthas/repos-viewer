import React from 'react';
import styled from 'styled-components';

import RepoListItem from '../RepoListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const RepoList = ({
  repos,
  selectedRepo,
  updateSelectedRepo
}) => (
  <Wrapper>
    {repos.map(
      repo => (
        <RepoListItem
          {...repo}
          key={repo.id}
          isSelected={repo.name === selectedRepo}
          onClick={() => updateSelectedRepo(repo.name)}
        />
      )
    )}
  </Wrapper>
);

export default RepoList;
