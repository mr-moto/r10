import React, { Component } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { withNavigation } from "@expo/ex-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import { closeSpeaker } from "../../lib/navigationHelpers";

const CloseButton = () => {
    return (
        <TouchableOpacity onPress={() => closeSpeaker()} style={{marginLeft: 8}}>
            {Platform.OS === "ios" ? (
                <Icon name={"ios-close"} color="white" size={42} />
            ) : (
                <Icon name={"md-close"} color="white" size={42} />
            )}
        </TouchableOpacity>
    );
};

export default CloseButton;
