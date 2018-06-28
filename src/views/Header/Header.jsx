import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../../components/Search';

const Wrapper = styled.div`
  height: 64px;
  background-color: '#e5ece6';
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 48px;
  box-shadow: 0 2px 4px 0 rgba(27, 20, 100, 0.3);
`;

const OrgWrapper = styled.span`
  flex: 1;
  font-size: 1.5em;
`;

const Header = ({
  selectedOrg
}) => (
  <Wrapper>
    <OrgWrapper>
      {selectedOrg}
    </OrgWrapper>
    <SearchContainer />
  </Wrapper>
);

export default Header;
