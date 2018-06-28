import React from 'react';
import styled from 'styled-components';
import Contributor from '../Contributor';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const TitleWrapper = styled.div`
  font-size: 1.17em;
  font-weight: bold;
`;

const ContributorsContainer = styled.div`
  display: flex;
  background-color: #f6f8fa;
  padding: 16px;
  flex-direction: row;
  margin-top: 16px;
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

const Contributors = ({
  selectedRepo,
  // selectedPage,
  // contributors,
  updateRepoContributors
}) => {

  const selectedPage = 1;
  const list = [
    {
      "name": "Contrib 9",
      "avatar": "https://avatars2.githubusercontent.com/u/7947934?v=4"
    },
    {
      "name": "Contrib 10",
      "avatar": "https://avatars2.githubusercontent.com/u/7947934?v=4"
    }
  ];

  return (
    <Wrapper>
      <TitleWrapper>Contributors</TitleWrapper>
      <ContributorsContainer>
        {list.map(contributor => (
          <Contributor
            {...contributor}
            key={contributor.avatar}
          />
        ))}
      </ContributorsContainer>
      <NavWrapper>
        <NavIconWrapper
          title="Previous"
          className="material-icons md-48"
          onClick={() => updateRepoContributors({ name: selectedRepo, page: selectedPage - 1 })}
        >
          keyboard_arrow_left
        </NavIconWrapper>
        <NavIconWrapper
          className="material-icons md-48"
          title="Next"
          onClick={() => updateRepoContributors({ name: selectedRepo, page: selectedPage + 1 })}
        >
          keyboard_arrow_right
        </NavIconWrapper>
      </NavWrapper>
    </Wrapper>
  );
};

export default Contributors;
