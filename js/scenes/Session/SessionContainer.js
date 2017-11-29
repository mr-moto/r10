import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import { queryFaves, realm } from '../../config/models';
import Session from './Session';
import { fetchSpeaker } from '../../redux/modules/speaker';
import { fetchFaves } from '../../redux/modules/faves';

import { styles } from './styles';

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Session',
    },
  };
  componentDidMount = () => {
    realm.addListener('change', this.refreshFaves);
    this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
    this.props.dispatch(fetchFaves());
  };
  refreshFaves = () => {
    this.props.dispatch(fetchFaves());
  };
  render() {
    const {
      sessionData, singleSpeaker, faves, isLoading,
    } = this.props;
    return isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="skyblue" animating />
      </View>
    ) : (
      <Session sessionData={sessionData} speaker={singleSpeaker} faves={faves} />
    );
  }
}

const mapStateToProps = state => ({
  singleSpeaker: state.speaker.singleSpeaker,
  faves: state.favourites.faves,
  isLoading: state.session.isLoading,
});

SessionContainer.PropTypes = {
  singleSpeaker: PropTypes.object,
  faves: PropTypes.array,
  sessionData: PropTypes.object,
  fetchSpeaker: PropTypes.func.isRequired,
  fetchFaves: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(SessionContainer);
