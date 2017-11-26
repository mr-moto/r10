import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({buttonText}) => {
    return (
        <TouchableOpacity>
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default Button;
