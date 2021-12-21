// @flow
import React from 'react';
import styled from '@emotion/styled'

const Card = ({ children }) => {
  return (
    <StyledCard>
        { children }
    </StyledCard>
  );
};

const StyledCard = styled.div`
    display: flex;
    align-items: center;

    font-family: 'Montserrat', sans-serif;

    margin: var(--spacing-medium);
    padding: var(--spacing-small);
    border-radius: var(--border-radius-large);

    background-color: var(--color-white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`

export default Card;