import React from "react";
import { Text, View, TouchableHighlight, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";

import { goToSpeaker } from '../../lib/navigationHelpers';

import { styles } from "./styles";

const Session = ({ sessionData, speaker, currentNavigatorUID }) => {
    console.log(speaker);
    return (
        <View>
            <View>
                <Text>{sessionData.location}</Text>
                <Icon
                    size={16}
                    name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                    style={styles.scheduleHeart}
                />
            </View>
            <View>
                <Text>{sessionData.title}</Text>
                <Text>{moment.unix(sessionData.start_time).format("LT")}</Text>
                <Text>{sessionData.description}</Text>
            </View>
            <View>
                <Text>Presented by</Text>
                {speaker ? (
                    <TouchableHighlight
                        onPress={() => goToSpeaker(speaker)}
                    >
                        <View>
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30
                                }}
                                source={{ uri: `${speaker.image}` }}
                            />
                            <Text>{speaker.name}</Text>
                        </View>
                    </TouchableHighlight>
                ) : (
                    false
                )}
            </View>
        </View>
    );
};

export default Session;
