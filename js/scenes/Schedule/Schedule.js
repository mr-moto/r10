import React from "react";
import Moment from "moment";
import { Text, SectionList, View, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import { goToSession } from '../../lib/navigationHelpers';
import { styles } from "./styles";


const Schedule = ({ data, currentNavigatorUID }) => {
    console.log(currentNavigatorUID)
    return (
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
                                <Icon 
                                    size={16}
                                    name={Platform.OS === 'ios' ? "ios-heart" : "md-heart"}
                                    style={styles.scheduleHeart}
                                />
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
            sections={data}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
};
export default Schedule;
