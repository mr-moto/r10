import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import PropTypes from 'prop-types';

const HeaderGradient = ({ colors }) => (
  <LinearGradient
    colors={colors}
    style={styles.linearGradient}
    end={{ x: 1.0, y: 0.1 }}
    start={{ x: 0.1, y: 1.0 }}
  />
);

export default HeaderGradient;
