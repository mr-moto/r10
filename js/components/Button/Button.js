import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ buttonText }) => (
  <TouchableOpacity>
    <Text>{buttonText}</Text>
  </TouchableOpacity>
);

export default Button;
