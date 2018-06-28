import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: pink;
  width: 100%;
  min-height: 24px;
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
  border: 1px solid #ccc;
  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RepoListItem = ({
  name,
  selectedRepo,
  onClick
}) => (
  <Wrapper onClick={onClick}>
    {name}
  </Wrapper>
);

export default RepoListItem;
