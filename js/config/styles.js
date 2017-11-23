import { Platform } from "react-native";

export const colors = {
    medGrey: "#999999",
    lightGrey: "#e6e6e6",
    purple: "#9963ea"
};
export const typography = {
    ...Platform.select({
        ios: { fontMainReg: "Montserrat" },
        android: { fontMainReg: "Montserrat-Regular" }
    }),
    fontMainLight: "Montserrat-Light"
};
