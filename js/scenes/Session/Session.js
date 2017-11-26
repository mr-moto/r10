import React from "react";
import {
    Text,
    View,
    TouchableHighlight,
    Image,
    Platform,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import moment from "moment";

import Button from "../../components/Button";
import { createFave, deleteFave } from "../../config/models";
import { goToSpeaker } from "../../lib/navigationHelpers";

import { styles } from "./styles";

const Session = ({ sessionData, speaker, faves }) => {
    const isFaved = faves.indexOf(sessionData.session_id) > -1 ? true : false;
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
                    <TouchableHighlight onPress={() => goToSpeaker(speaker)}>
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
            {isFaved ? (
                <TouchableOpacity
                    onPress={() => deleteFave(sessionData.session_id)}
                >
                    <View pointerEvents="box-only">
                        <Button buttonText={"Remove from Faves"} />
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={() => createFave(sessionData.session_id)}
                >
                    <View pointerEvents="box-only">
                        <Button buttonText={"Add to Faves"} />
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Session;
