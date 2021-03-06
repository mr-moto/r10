import { Dimensions, StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

// const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sessionContainer: {
    padding: 15,
  },
  scheduleHeart: {
    margin: 12,
    marginTop: 5,
    color: 'red',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: typography.fontMainReg,
    marginBottom: 10,
  },
  time: {
    color: colors.red,
    fontFamily: typography.fontMainReg,
    marginBottom: 5,
  },
  description: {
    fontFamily: typography.fontMainLight,
    lineHeight: 22,
    marginBottom: 15,
  },
  speakerContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  speakerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  speakerName: {
    fontFamily: typography.fontMainReg,
  },
  separator: {
    // height: StyleSheet.hairlineWidth,
    height: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: colors.medGrey,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    padding: 15,
    fontFamily: typography.fontMainReg,
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonGradient: {
    maxWidth: 300,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    // overflow: "hidden"
  },
});

export default styles;
