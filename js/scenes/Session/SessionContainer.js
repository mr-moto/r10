import React, { Component } from "react";
import Session from "./Session";
import { connect } from "react-redux";
import { queryFaves} from'../../config/models'

import { fetchSpeaker } from "../../redux/modules/speaker";
import {fetchFaves} from '../../redux/modules/faves'
import realm from '../../config/models';

class SessionContainer extends Component {
    static route = {
        navigationBar: {
            title: "Session"
        }
    };
    componentDidMount = () => {
        realm.addListener('change', this.refreshFaves);
        this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
        this.props.dispatch(fetchFaves());
    }
      refreshFaves = () => {
    this.props.dispatch(fetchFaves())
  }
    render() {
        const { sessionData, singleSpeaker, faves  } = this.props;
        return <Session sessionData={sessionData} speaker={singleSpeaker} faves={faves}/>;
    }
}


const mapStateToProps = state => {
    return {
        singleSpeaker: state.speaker.singleSpeaker,
        faves: state.favourites.faves
    };
};

export default connect(mapStateToProps)(SessionContainer);
