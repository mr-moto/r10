import { Dimensions, StyleSheet } from "react-native";
import { colors, typography } from "../../config/styles";

const styles = StyleSheet.create({
    // styles here
    logoContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 20,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1
    },
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    heading: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "Montserrat-Regular"
    },
    subHeading: {
        color: "#9963ea",
        marginBottom: 20,
        fontFamily: "Montserrat-Regular"
    },
    itemContent: {
        marginBottom: 20,
        fontFamily: "Montserrat-Light"
    },
    loadingContainer: {
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
