import React, { Component } from "react";
import {
    Text,
    View,
    LayoutAnimation,
    Platform,
    TouchableWithoutFeedback,
    UIManager,
    Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../../config/styles";
import { styles } from "./styles";

class ConductItem extends Component {
    constructor() {
        super();
        this.state = {
            showConduct: false,
            spin: new Animated.Value(0)
        };

        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    animate = () => {
        LayoutAnimation.linear();
    };

    spin = () => {
        Animated.timing(this.state.spin, { toValue: 1, duration: 250 }).start();
    };

    toggleText = () => {
        this.state.spin.setValue(0);
        const { showConduct } = this.state;
        this.setState({
            showConduct: !showConduct
        });
        this.animate();
        this.spin();
    };

    render() {
        const { data } = this.props;

        let spinIcon = this.state.spin.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"]
        });

        let animatedStyle = {
            transform: [{ rotate: spinIcon }]
        };

        return (
            <View>
                <TouchableWithoutFeedback onPress={this.toggleText}>
                    <View style={styles.titleContainer}>
                        <Animated.Text style={[styles.icon, animatedStyle]}>
                            {this.state.showConduct ? "-" : "+"}
                        </Animated.Text>
                        <Text style={styles.title} onPress={this.toggleText}>
                            {data.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.state.showConduct && (
                    <Text style={styles.description}>{data.description}</Text>
                )}
            </View>
        );
    }
}

export default ConductItem;
