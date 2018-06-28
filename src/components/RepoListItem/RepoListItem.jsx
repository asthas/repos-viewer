import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  color: #5f6368;
  align-items: center;
  max-width: 240px;
  cursor: pointer;
  padding: 12px;
  min-height: 32px;
  &:hover, &:active, &.active {
    color: #202124;
    background-color: #F5F5F5;
  }
`;

const TextWrapper = styled.div`
  font-size: 1.17em;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RepoListItem = ({
  name,
  isSelected,
  onClick
}) => (
  <Wrapper className={isSelected ? 'active' : ''} onClick={onClick}>
    <TextWrapper>{name}</TextWrapper>
  </Wrapper>
);

export default RepoListItem;
