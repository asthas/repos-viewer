import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 64px;
  background-color: '#e5ece6';
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 48px;
  box-shadow: 0 2px 4px 0 rgba(27, 20, 100, 0.3);
`;

const Header = () => (
  <Wrapper>
    Facebook Repos
  </Wrapper>
);

export default Header;
