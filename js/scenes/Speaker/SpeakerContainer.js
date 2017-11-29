import React, { Component } from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import CloseButton from '../../components/CloseButton';
import Speaker from './Speaker';

class SpeakerComponent extends Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  };
  render() {
    const { speakerData } = this.props;
    return <Speaker speakerData={speakerData} />;
  }
}

SpeakerComponent.PropTypes = {
  speakerData: PropTypes.object,
};

export default SpeakerComponent;
