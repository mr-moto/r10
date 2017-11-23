import React from "react";
import { Text, View, TouchableHighlight, Image } from "react-native";
import moment from "moment";

const Session = ({ sessionData }) => {
    return (
        <View>
            <View>
                <Text>{sessionData.location}</Text>
                <Text>+</Text>
            </View>
            <View>
                <Text>{sessionData.title}</Text>
                <Text>{moment.unix(sessionData.start_time).format("LT")}</Text>
                <Text>{sessionData.description}</Text>
            </View>
            <View>
                <Text>Presented by</Text>
                {/* speaker data here */}
            </View>
        </View>
    );
};

export default Session;
