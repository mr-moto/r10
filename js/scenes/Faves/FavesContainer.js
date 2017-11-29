import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import PropTypes from "prop-types";

import SessionList from "../../components/SessionList";
import realm from "../../config/models";
import { fetchSession } from "../../redux/modules/sessions";
import { fetchFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../lib/dataHelpers";

import { styles } from './styles';
class FavesContainer extends Component {
    componentDidMount = () => {
        realm.addListener("change", this.refreshFaves);
        this.props.dispatch(fetchSession());
        this.props.dispatch(fetchFaves());
    };
    refreshFaves = () => {
        this.props.dispatch(fetchFaves());
    };

    static route = {
        navigationBar: {
            title: "Faves"
        }
    };

    render() {
        const { isLoading, sessionData, faves } = this.props;

        const flatSessionList = [];
        sessionData.map(a => a.data.map(b => flatSessionList.push(b)));

        const favesList = flatSessionList.filter(session => {
            return faves.indexOf(session.session_id) >= 0;
        });

        return isLoading ? (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size="large"
                    color="skyblue"
                    animating={true}
                />
            </View>
        ) : (
            <SessionList
                listData={formatSessionData(favesList)}
                currentNavigatorUID={"faves"}
                faves={faves}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        sessionData: state.session.sessionData,
        isLoading: state.session.isLoading,
        faves: state.favourites.faves
    };
};

FavesContainer.PropTypes = {
    sessionData: PropTypes.object,
    isLoading: PropTypes.bool,
    faves: PropTypes.array,
    fetchSession: PropTypes.func.isRequired,
    fetchFaves: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(FavesContainer);
