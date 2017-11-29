import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';

import { fetchConduct } from '../../redux/modules/conduct';
import About from './About';
import { styles } from './styles';

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    },
  };

  componentDidMount() {
    this.props.dispatch(fetchConduct());
  }

  render() {
    const { isLoading, conductData } = this.props;
    return isLoading ? (
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="skyblue" animating />
      </View>
    ) : (
      <About data={conductData} />
    );
  }
}

const mapStateToProps = state => ({
  conductData: state.conduct.conductData,
  isLoading: state.conduct.isLoading,
});

AboutContainer.PropTypes = {
  fetchConduct: PropTypes.func.isRequired,
  conductData: PropTypes.array,
  isLoading: PropTypes.bool,
  componentDidMount: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
};

export default connect(mapStateToProps)(AboutContainer);
