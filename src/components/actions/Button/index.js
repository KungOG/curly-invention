import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './style';

const Button = (props) => {
  const { children } = props;
  return <StyledButton> {children} </StyledButton>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
