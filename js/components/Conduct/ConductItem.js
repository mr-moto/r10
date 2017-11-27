import React, { Component } from "react";
import {
    Text,
    View,
    LayoutAnimation,
    Platform,
    TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { colors } from '../../config/styles'
import { styles } from './styles'

class ConductItem extends Component {
    state = { showConduct: false };

    animate = () => {
        LayoutAnimation.linear();
    };
    toggleText = () => {
        const { showConduct } = this.state;
        this.setState({
            showConduct: !showConduct
        });
        this.animate();
    };
    render() {
        const { data } = this.props;
        return (
            <View>
                <TouchableWithoutFeedback onPress={this.toggleText}>
                    <View style={styles.titleContainer}>
                        <Icon
                            size={16}
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                            color={colors.purple}
                        />
                        <Text style={styles.title} onPress={this.toggleText}>{data.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.state.showConduct && <Text style={styles.description}>{data.description}</Text>}
            </View>
        );
    }
}

export default ConductItem;
