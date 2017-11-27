import { StyleSheet } from "react-native";
import { colors, typography } from '../../config/styles'

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        color: colors.purple,
        marginLeft: 15,
        fontSize: 14
    },
    description: {
        fontFamily: typography.fontMainLight,
        marginBottom: 10
    }
});
