import React from "react";
import styled from "styled-components";
import Contributor from "../Contributor";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const TitleWrapper = styled.div`
  color: #0336ff;
  font-size: 1.17em;
  font-weight: bold;
`;

const ContributorsContainer = styled.div`
  display: flex;
  background-color: #f6f8fa;
  padding: 16px;
  flex-direction: row;
  margin-top: 16px;
  min-height: 148px;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
`;

const NavIconWrapper = styled.i`
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

class Contributors extends React.Component {
  loadDataIfNeeded() {
    const {
      selectedRepo,
      selectedPage,
      contributors: { loaded, loading },
      updateRepoContributors
    } = this.props;

    if (!loaded && !loading) {
      updateRepoContributors({
        repo: selectedRepo,
        page: selectedPage
      });
    }
  }

  renderList(list) {
    return list.map(contributor => (
      <Contributor {...contributor} key={contributor.id} />
    ));
  }

  renderLoading() {
    return <InfoWrapper>Loading "contributors"</InfoWrapper>;
  }

  renderNoResults() {
    return <InfoWrapper>No contributors found</InfoWrapper>;
  }

  renderView(loading, loaded, list) {
    if (loading) {
      return this.renderLoading();
    }
    if (loaded && list.length === 0) {
      return this.renderNoResults();
    }
    return this.renderList(list);
  }

  componentDidMount() {
    this.loadDataIfNeeded();
  }

  componentDidUpdate() {
    this.loadDataIfNeeded();
  }

  render() {
    const {
      selectedRepo,
      selectedPage,
      contributors: { loading, loaded, list },
      updateRepoContributors
    } = this.props;

    return (
      <Wrapper>
        <TitleWrapper>Contributors</TitleWrapper>
        <ContributorsContainer>
          {this.renderView(loading, loaded, list)}
        </ContributorsContainer>
        <NavWrapper>
          <NavIconWrapper
            title="Previous"
            className="material-icons md-48"
            onClick={() =>
              selectedPage > 1 &&
              updateRepoContributors({
                repo: selectedRepo,
                page: selectedPage - 1
              })
            }
          >
            keyboard_arrow_left
          </NavIconWrapper>
          <NavIconWrapper
            className="material-icons md-48"
            title="Next"
            onClick={() =>
              updateRepoContributors({
                repo: selectedRepo,
                page: selectedPage + 1
              })
            }
          >
            keyboard_arrow_right
          </NavIconWrapper>
        </NavWrapper>
      </Wrapper>
    );
  }
}

export default Contributors;
