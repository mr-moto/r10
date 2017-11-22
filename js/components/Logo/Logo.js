import React from "react";
import { View, Image } from "react-native";

const Logo = () => {
    return (
        <View>
            <Image source={require("../../assets/images/r10_logo.png")} />
        </View>
    );
};

export default Logo;
