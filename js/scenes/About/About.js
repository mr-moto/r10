import React from "react";
import { Text, ScrollView, FlatList, View, Image } from "react-native";
import PropTypes from "prop-types";
import Logo from "../../components/Logo";
import ConductList from '../../components/Conduct'
import styles from "./styles";

const About = ({ data }) => {
    let key = 0;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.test}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <Text>
                    R10 is a conference that focuses on just about any topic
                    related to dev.
                </Text>
                <Text style={styles.heading}>Date & Venue</Text>
                <Text>
                    The R10 conference will take place on Tuesday, June 27, 2017
                    in Vancouver, BC.
                </Text>
                <Text style={styles.heading}>Code of Conduct</Text>
                {/* {data.map(item => {
                    return (
                        <View key={key++}>
                            <Text style={styles.subHeading}>
                                + {item.title}
                            </Text>
                            <Text style={styles.itemContent}>
                                {item.description}
                            </Text>
                        </View>
                    );
                })} */}
                <ConductList data={data} />
            </View>
        </ScrollView>
    );
};

About.propTypes = {
    data: PropTypes.array
};

export default About;
