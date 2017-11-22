import React from "react";
import Moment from "moment";
import { Text, SectionList, View } from "react-native";

const Schedule = ({ data }) => {
    return (
        <SectionList
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.location}</Text>
                    </View>
                );
            }}
            renderSectionHeader={item => {
                return (
                    <Text>
                        {Moment.unix(item.section.title).format("h:mm A")}
                    </Text>
                );
            }}
            sections={data}
            keyExtractor={item => item.title}
            ItemSeparatorComponent={() => <View />}
        />
    );
};
export default Schedule;
