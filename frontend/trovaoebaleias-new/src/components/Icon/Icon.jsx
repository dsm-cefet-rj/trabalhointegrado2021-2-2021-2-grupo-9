import React from 'react';
import styled from '@emotion/styled'

import ThreeDots from "../../img/three-dots.svg";

const ICON_TYPES = {
    'three-dots': ThreeDots,
}

const Icon = ({ type }) => {
  return (
    <StyledIcon>
        <img src={ICON_TYPES[type]} alt={type} />
    </StyledIcon>
  );
};

const StyledIcon = styled.button`
    display: flex;
    align-items: center;
    padding: var(--spacing-xxxSmall);

    text-decoration: none;
	border: none; 
	cursor: pointer;
    background-color: inherit;

    img {
        width: 24px;
        height: 24px;
        transform: rotate(90deg);
    }
`

export default Icon;