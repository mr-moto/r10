import React from 'react';
import { Text, ScrollView, FlatList, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo';
import ConductList from '../../components/Conduct';
import styles from './styles';

const About = ({ data }) => (
  <ScrollView style={styles.container}>
    <View style={styles.test}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text style={styles.heading}>Date & Venue</Text>
      <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
      <Text style={styles.heading}>Code of Conduct</Text>
      <ConductList data={data} />
    </View>
  </ScrollView>
);


export default About;
