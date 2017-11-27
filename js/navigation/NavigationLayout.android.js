import React, { Component } from "react";
import { StyleSheet, Dimensions } from 'react-native';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem
} from "@expo/ex-navigation";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import HeaderGradient from '../components/HeaderGradient/'
import { colors, typography } from "../config/styles";
import Router from "./routes";


const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {fontFamily: typography.fontRegular},
    renderBackground: () => (
      <HeaderGradient colors={[colors.purple, colors.red]}/>
    )
  }
}
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
                        defaultRouteConfig = {defaultRouteConfig}
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
                        defaultRouteConfig = {defaultRouteConfig}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="faves"
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected =>
                        this._renderTitle("faves", isSelected)
                    }
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"
                        initialRoute={Router.getRoute("faves")}
                        defaultRouteConfig = {defaultRouteConfig}
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
