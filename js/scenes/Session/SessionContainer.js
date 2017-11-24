import React, { Component } from "react";
import Session from "./Session";
import { connect } from "react-redux";

import { fetchSpeaker } from "../../redux/modules/speaker";

class SessionContainer extends Component {
    static route = {
        navigationBar: {
            title: "Session"
        }
    };
    componentDidMount = () => {
        this.props.dispatch(fetchSpeaker(this.props.sessionData.speaker));
    }
    render() {
        const { sessionData, singleSpeaker } = this.props;
        return <Session sessionData={sessionData} speaker={singleSpeaker} />;
    }
}

const mapStateToProps = state => {
    return {
        singleSpeaker: state.speaker.singleSpeaker
    };
};

export default connect(mapStateToProps)(SessionContainer);
