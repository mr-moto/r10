import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../config/styles";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
    sectionHeader: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 12,
        backgroundColor: colors.lightGrey,
        fontFamily: "Montserrat-Regular"
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.lightGrey
    },
    scheduleLocationView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    scheduleLocation: {
        color: colors.medGrey,
        fontFamily: "Montserrat-Regular",
        margin: 12,
        marginTop: 5,
        fontSize: 12
    },
    scheduleTitle: {
        fontFamily: "Montserrat-Regular",
        margin: 12,
        marginBottom: 5,
        fontSize: 14
    },
    scheduleHeart: {
        margin: 12,
        marginTop: 5,
        color: "red"
    }
});
