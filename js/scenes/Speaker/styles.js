import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
export const styles = StyleSheet.create({
    header: {
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 15,
        position: "relative"
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: typography.fontMainReg,
        color: "white",
        textAlign: "center"
    },
    speakerBg: {
        backgroundColor: "black",
        padding: 15,
        height: height,
        width: width
    },
    speakerCard: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 15
    },
    speakerImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 5,
        marginBottom: 20
    },
    speakerName: {
        fontSize: 24,
        fontFamily: typography.fontMainReg,
        marginBottom: 15
    },
    speakerBio: {
        marginBottom: 15,
        fontSize: 14,
        fontFamily: typography.fontMainLight,
        textAlign: "left",
        lineHeight: 24
    },
    button: {},
    buttonText: {
        fontSize: 16,
        padding: 15,
        fontFamily: typography.fontMainReg,
        color: colors.white
    },
    buttonGradient: {
        maxWidth: 300,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 50,
        overflow: "hidden"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15
    }
});
