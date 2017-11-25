import React from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
    Dimensions
} from "react-native";

const Speaker = ({ speakerData }) => {
    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;
    return (
        <View
            style={{
                backgroundColor: "black",
                padding: 10,
                height: height,
                width: width
            }}
        >
            <View>
                <Text style={{ color: "white" }}>header</Text>
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5
                }}
            >
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30
                    }}
                    source={{ uri: `${speakerData.image}` }}
                />
                <Text> {speakerData.name} </Text>
                <Text> {speakerData.bio} </Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL(`${speakerData.url}`)}
                >
                    <Text>Read More on Wikipedia </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Speaker;
