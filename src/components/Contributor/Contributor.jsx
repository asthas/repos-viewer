import React from "react";

import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  text-decoration: none;
  color: black;
`;

const AvatarWrapper = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const Contributor = ({ name, avatar }) => (
  <Wrapper href={`https://github.com/${name}`} target="_blank">
    <AvatarWrapper src={avatar} alt={`${name}'s profile photo`} />
    <div>{name}</div>
  </Wrapper>
);

export default Contributor;
