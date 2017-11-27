import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { fetchSession } from "../../redux/modules/sessions";
import { fetchFaves } from "../../redux/modules/faves";
import SessionList from "../../components/SessionList";

class ScheduleContainer extends Component {
    componentDidMount() {
        this.props.dispatch(fetchSession());
        this.props.dispatch(fetchFaves());
    }

    static route = {
        navigationBar: {
            title: "Schedule"
        }
    };

    render() {
        const { isLoading, sessionData, faves } = this.props;
        return isLoading ? (
            <ActivityIndicator size="large" color="skyblue" animating={true} />
        ) : (
            <SessionList
                listData={sessionData}
                currentNavigatorUID={"schedule"}
                faves={faves}
            />
        );
    }
}

const mapStateToProps = state => ({
    sessionData: state.session.sessionData,
    isLoading: state.session.isLoading,
    faves: state.favourites.faves
});

ScheduleContainer.PropTypes = {
    sessionData: PropTypes.object,
    isLoading: PropTypes.bool,
    faves: PropTypes.array,
    fetchSession: PropTypes.func.isRequired,
    fetchFaves: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(ScheduleContainer);
