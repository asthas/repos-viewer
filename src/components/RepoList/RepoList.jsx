import React from "react";
import styled from "styled-components";

import RepoListItem from "../RepoListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CenteredWrapper = Wrapper.extend`
  align-items: center;
  justify-content: center;
`;

class RepoList extends React.Component {
  componentDidMount() {
    const { repos, selectedOrg, updateOrg } = this.props;
    if (repos.length === 0) {
      return updateOrg(selectedOrg);
    }
  }

  render() {
    const { repos, selectedRepo, updateSelectedRepo, totalRepos } = this.props;

    if (repos.length === 0 && totalRepos > 0) {
      return <CenteredWrapper>No repos found</CenteredWrapper>;
    } else if (repos.length === 0) {
      return <CenteredWrapper>Loading "repos"</CenteredWrapper>;
    }

    return (
      <Wrapper>
        {repos.map(repo => (
          <RepoListItem
            {...repo}
            key={repo.id}
            isSelected={repo.name === selectedRepo}
            onClick={() => updateSelectedRepo(repo.name)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default RepoList;
