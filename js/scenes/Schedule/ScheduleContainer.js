import React, { Component } from "react";
import { connect } from "react-redux";

import { ActivityIndicator } from "react-native";

import { fetchSession } from "../../redux/modules/sessions";
import Schedule from "./Schedule";

class ScheduleContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchSession());
    }

    static route = {
        navigationBar: {
            title: "Schedule"
        }
    };

    render() {
        const { isLoading, sessionData } = this.props;
        console.log(sessionData);
        return isLoading ? (
            <ActivityIndicator size="large" color="skyblue" animating={true} />
        ) : (
            <Schedule data={sessionData} />
        );
    }
}

const mapStateToProps = state => ({
    sessionData: state.session.sessionData,
    isLoading: state.session.isLoading
});

export default connect (mapStateToProps)(ScheduleContainer);
