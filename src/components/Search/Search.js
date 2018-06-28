import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 24px;
  display flex;
  position: relative;
  color: #000;
  height: 48px;
`;

const InputWrapper = styled.input`
  border-radius: 4px;
  border: 1px solid #bbb;
  outline: none;
  padding: 8px;
`;

const SearchIconWrapper = styled.i`
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 8px;
`;

const Search = ({
  updateSearchTerm
}) => (
  <Wrapper>
    <SearchIconWrapper className="material-icons md-48">
      search
    </SearchIconWrapper>
    <InputWrapper
      name="search"
      id="search"
      type="search"
      placeholder="Search Transactions"
      onChange={(e) => updateSearchTerm(e.target.value)}
    />
  </Wrapper>
);

export default Search;
