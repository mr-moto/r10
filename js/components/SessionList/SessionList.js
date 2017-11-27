import React from "react";
import Moment from "moment";
import {
    Text,
    SectionList,
    View,
    TouchableOpacity,
    Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { goToSession } from "../../lib/navigationHelpers";

import { styles } from "./styles";

const SessionList = ({ listData, currentNavigatorUID, faves }) => {
    return listData.length > 0 ? (
        <SectionList
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        onPress={() => goToSession(currentNavigatorUID, item)}
                    >
                        <View>
                            <Text style={styles.scheduleTitle}>
                                {item.title}
                            </Text>
                            <View style={styles.scheduleLocationView}>
                                <Text style={styles.scheduleLocation}>
                                    {item.location}
                                </Text>
                                {faves.indexOf(item.session_id) > -1 &&
                                    Platform.OS === "ios" && (
                                        <Icon
                                            style={styles.heart}
                                            name={
                                                Platform.OS === "ios"
                                                    ? "ios-heart"
                                                    : "md-heart"
                                            }
                                            size={20}
                                            color="red"
                                        />
                                    )}
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
            renderSectionHeader={item => {
                return (
                    <Text style={styles.sectionHeader}>
                        {Moment.unix(item.section.title).format("h:mm A")}
                    </Text>
                );
            }}
            sections={listData}
            keyExtractor={item => item.session_id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    ) : (
        <View>
            <Text> No Sessions</Text>
        </View>
    );
};
export default SessionList;
