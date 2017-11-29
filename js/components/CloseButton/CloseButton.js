import React, { Component } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { withNavigation } from '@expo/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { closeSpeaker } from '../../lib/navigationHelpers';

const CloseButton = () => (
  <TouchableOpacity
    onPress={() => closeSpeaker()}
    style={{ position: 'absolute', bottom: '25%', left: 15 }}
  >
    {Platform.OS === 'ios' ? (
      <Icon name="ios-close" color="white" size={38} />
      ) : (
        <Icon name="md-close" color="white" size={38} />
      )}
  </TouchableOpacity>
);

export default CloseButton;
