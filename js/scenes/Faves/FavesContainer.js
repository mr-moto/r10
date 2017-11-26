import React, { Component } from 'react';
import { connect } from 'react-redux';

import Faves from './Faves'
import realm from '../../config/models';
import { fetchFaves } from '../../redux/modules/faves';
class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Favourites',
    }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchFaves());
    realm.addListener('change', this.updateFaves);
  }
  updateFaves = () => {

    this.props.dispatch(fetchFaves());
  }
  componentWillUnmount = () => {
    realm.removeListener('change', this.updateFave);
  }
  render() {
    const { sessionData, faves } = this.props;
    const favesSession = sessionData.filter(session => {
      return faves.indexOf(session.session_id) >= 0
    });
    return (
      <Faves faves={favesSession} />
    );
  }
}


const mapStateToProps = state => {
  return {
    sessionData: state.session.sessionData,
    faves: state.favourites.faves
  }
}

export default connect(mapStateToProps)(FavesContainer);