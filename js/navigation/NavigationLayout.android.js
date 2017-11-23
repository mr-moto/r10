import React, { Component } from "react";
import { StyleSheet, Dimensions } from 'react-native';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem
} from "@expo/ex-navigation";
import { Text, View } from "react-native";
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
        const width = Dimensions.get("window").width;
        return (
            <DrawerNavigation
                id="main"
                initialItem="schedule"
                drawerWidth={width/2}
                renderHeader={this._renderHeader}
            >
                <DrawerNavigationItem
                    id="about"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected =>
                        this._renderTitle("About", isSelected)
                    }
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute("about")}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="schedule"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected =>
                        this._renderTitle("schedule", isSelected)
                    }
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute("schedule")}
                    />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }
    _renderHeader = () => {
        return (
        <View style={styles.header}>
        </View>
        );
    };

    _renderTitle(text: string, isSelected: boolean) {
        return (
        <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
            {text}
        </Text>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },
  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },

  titleText: {
    fontWeight: 'bold',
    color: colors.medGrey
  },

  selectedTitleText: {
    color: colors.purple
  }
});

export default NavigationLayout;
