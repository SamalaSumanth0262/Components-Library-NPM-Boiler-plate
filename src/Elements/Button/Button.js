import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components'

// TO_DO => get color from theme.js 
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #2168f3;
  color: #2168f3;   
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #2168f3;
    color: white;
  `}
  ${props => props.large && css`
    height: 50px;
    pdding: 0.5em 1.2em;
    color: white;
  `}
`;

Button.propTypes = {
  primary: PropTypes.bool
};

Button.defaultProps = {
  primary: false
};
export { Button }
