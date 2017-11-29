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
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import { createFave, deleteFave } from "../../config/models";
import { goToSpeaker } from "../../lib/navigationHelpers";
import { colors } from "../../config/styles";

import { styles } from "./styles";

const Session = ({ sessionData, speaker, faves }) => {
    const isFaved = faves.indexOf(sessionData.session_id) > -1 ? true : false;
    return (
        <View style={styles.sessionContainer}>
            <View style={styles.locationContainer}>
                <Text>{sessionData.location}</Text>
                {faves.indexOf(sessionData.session_id) > -1 && (
                    <Icon
                        style={styles.heart}
                        name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                        size={20}
                        color="red"
                    />
                )}
            </View>
            <View>
                <Text style={styles.title}>{sessionData.title}</Text>
                <Text style={styles.time}>
                    {moment.unix(sessionData.start_time).format("LT")}
                </Text>
                <Text style={styles.description}>
                    {sessionData.description}
                </Text>
            </View>
            <View>
                <Text>Presented by:</Text>
                {speaker ? (
                    <TouchableOpacity onPress={() => goToSpeaker(speaker)}>
                        <View style={styles.speakerContainer}>
                            <Image
                                style={styles.speakerImage}
                                source={{ uri: `${speaker.image}` }}
                            />
                            <Text style={styles.speakerName}>
                                {speaker.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    false
                )}
            </View>
            <View style={styles.separator} />
            {/* coudnt get delete/add faves to work when ternary was placed in onPress... */}
            {isFaved ? (
                <View style={styles.buttonContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 1]}
                        colors={[colors.purple, colors.blue]}
                        style={styles.buttonGradient}
                    >
                        <TouchableOpacity
                            onPress={() => deleteFave(sessionData.session_id)}
                        >
                            <View
                                pointerEvents="box-only"
                                style={styles.buttonGradient}
                            >
                                <Text style={styles.buttonText}>
                                    Remove from Faves
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0, 1]}
                        colors={[colors.purple, colors.blue]}
                        style={styles.buttonGradient}
                    >
                        <TouchableOpacity
                            onPress={() => createFave(sessionData.session_id)}
                            underlayColor={colors.purple}
                        >
                            <View
                                pointerEvents="box-only"
                                style={styles.buttonGradient}
                            >
                                <Text style={styles.buttonText}>
                                    Add to Faves
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            )}
        </View>
    );
};

Session.PropTypes = {
    sessionData: PropTypes.object,
    speaker: PropTypes.object,
    faves: PropTypes.array
};

export default Session;
