import React, { Component } from "react";
import {
    Text,
    View,
    LayoutAnimation,
    Platform,
    TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
                    <View>
                        <Icon
                            size={16}
                            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
                        />
                        <Text onPress={this.toggleText}>{data.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.state.showConduct && <Text>{data.description}</Text>}
            </View>
        );
    }
}

export default ConductItem;
