import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Card = ({ children, noBorder, margin }) => {
  return (
    <StyledCard noBorder={noBorder} margin={margin}>
        { children }
    </StyledCard>
  );
};

const StyledCard = styled.div`
    display: flex;
    align-items: center;

    font-family: 'Montserrat', sans-serif;

    margin: var(--spacing-medium);
    padding: var(--spacing-xxSmall);
    border-radius: var(--border-radius-large);

    background-color: var(--color-white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

    ${props => 
      props.noBorder && 
      css`
        padding: 0; 
    `}

    ${props => 
      props.margin && 
      css`
        margin: var(--spacing-${props.margin}); 
    `}
`

export default Card;