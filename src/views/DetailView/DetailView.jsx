import React from 'react';
import styled from  'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  font-size: 1.17em;
`;

const CenteredWrapper = Wrapper.extend`
  justify-content: center;
  align-items: center;
`;

const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding: 16px 0;
  a {
    text-decoration: none;
  }
`

const DescriptionWrapper = styled.code`
  background-color: #f6f8fa;
  padding: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`

const InfoListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoTagWrapper = styled.div`
  margin: 8px 4px;
  padding: 4px;
  background-color: #f6f8fa;
  border: 1px solid transparent;
  font-size: 0.8em;
`;


const DetailView = ({
  selectedRepo,
  repoInfo: {
    id,
    watchers,
    stars,
    forks,
    url,
    description,
    issues,
    contributors,
    loaded
  },
}) => {
  if (!selectedRepo) {
    return (
      <CenteredWrapper>
        Select "repo" from sidebar
      </CenteredWrapper>
    )
  }

  if (!loaded) {
    return (
      <CenteredWrapper>
        Loading info for "{selectedRepo}"
      </CenteredWrapper>
    )
  }

  const infoList = [
    { title: 'Watchers', value: watchers },
    { title: 'Stars', value: stars },
    { title: 'Forks', value: forks },
    { title: 'Issues', value: issues },
  ]

  return (
    <Wrapper>
      <WrapperHeader>
        <InfoWrapper>
          <TitleWrapper><a href={url}>{selectedRepo}</a></TitleWrapper>
          <DescriptionWrapper>{description}</DescriptionWrapper>
        </InfoWrapper>
        <InfoListWrapper>
          {infoList.map(({ title, value }) => (
            <InfoTagWrapper key={title}>
              {`${title}: ${value}`}
            </InfoTagWrapper>
          ))}
        </InfoListWrapper>
      </WrapperHeader>
    </Wrapper>
  );
};

export default DetailView;
