import React, { Component } from "react";
import { connect } from "react-redux";

import { ActivityIndicator } from "react-native";

import { fetchConduct } from "../../redux/modules/conduct";
import About from "./About";

class AboutContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchConduct());
    }

    static route = {
        navigationBar: {
            title: "About"
        }
    };

    render() {
        const { isLoading, conductData } = this.props;
        return isLoading ? (
            <ActivityIndicator size="large" color="skyblue" animating={true} />
        ) : (
            <About data={conductData} />
        );
    }
}

const mapStateToProps = state => ({
    conductData: state.conduct.conductData,
    isLoading: state.conduct.isLoading
});

export default connect (mapStateToProps)(AboutContainer);
