import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { colors } from '../../config/styles';
import { styles } from './styles';
import CloseButton from '../../components/CloseButton';

const Speaker = ({ speakerData }) => (
  <ScrollView>
    <View style={styles.header}>
      <CloseButton />
      <Text style={styles.headerTitle}>About the Speaker</Text>
    </View>
    <View style={styles.speakerBg}>
      <View style={styles.speakerCard}>
        <Image style={styles.speakerImage} source={{ uri: `${speakerData.image}` }} />
        <Text style={styles.speakerName}> {speakerData.name} </Text>
        <Text style={styles.speakerBio}> {speakerData.bio} </Text>
        <View style={styles.buttonContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 1]}
            colors={[colors.purple, colors.blue]}
            style={styles.buttonGradient}
          >
            <TouchableHighlight
              onPress={() => Linking.openURL(`${speakerData.url}`)}
              underlayColor={colors.purple}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Read More on Wikipedia</Text>
              </View>
            </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    </View>
  </ScrollView>
);

Speaker.PropTypes = {
  speakerData: PropTypes.object,
};

export default Speaker;
