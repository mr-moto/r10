import React, { Component } from "react";
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem as TabItem
} from "@expo/ex-navigation";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors, typography } from "../config/styles";
import Router from "./routes";

class NavigationLayout extends Component {
    static route = {
        navigationBar: {
            visible: false
        }
    };

    render() {
        return (
            <TabNavigation
                id="main"
                navigatorUID="main"
                initialTab="schedule"
                tabBarColor="black"
            >
                <TabItem
                    id="about"
                    title="About"
                    renderTitle={this.renderTitle}
                    renderIcon={isSelected =>
                        this.renderIcon("ios-information-circle", isSelected)}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute("about")}
                    />
                </TabItem>

                <TabItem
                    id="schedule"
                    title="Schedule"
                    renderTitle={this.renderTitle}
                    renderIcon={isSelected =>
                        this.renderIcon("ios-calendar", isSelected)}
                >
                    <StackNavigation
                        id="schedule"
                        initialRoute={Router.getRoute("schedule")}
                    />
                </TabItem>
            </TabNavigation>
        );
    }

    renderIcon(iconName, isSelected) {
        return (
            <Icon
                name={iconName}
                size={24}
                color={isSelected ? "white" : colors.medGrey}
            />
        );
    }
    renderTitle(isSelected, title) {
        return (
            <Text
                style={{
                    color: isSelected ? "white" : colors.medGrey,
                    fontFamily: typography.fontMainReg
                }}
            >
                {title}
            </Text>
        );
    }
}

export default NavigationLayout;
