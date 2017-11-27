import React, { Component } from "react";
import { Platform, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import CloseButton from "../../components/CloseButton";
import Speaker from "./Speaker";

class SpeakerComponent extends Component {
    static route = {
        navigationBar: {
            // Cant get margin top 

            // title: "About the Speaker",
            // backgroundColor: "black",
            // tintColor: "white",
            // renderLeft: () => <CloseButton />,
            visible: false
        }
    };
    render() {
        const { speakerData } = this.props;
        return <Speaker speakerData={speakerData} />;
    }
}

export default SpeakerComponent;
