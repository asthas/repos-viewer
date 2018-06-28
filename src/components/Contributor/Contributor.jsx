import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
`;

const AvatarWrapper = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`

const Contributor = ({
  name,
  avatar
}) => (
  <Wrapper>
    <AvatarWrapper src={avatar} alt={`${name}'s profile photo`} />
    <div>{name}</div>
  </Wrapper>
);

export default Contributor;
