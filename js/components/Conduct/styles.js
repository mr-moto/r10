import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    color: colors.purple,
  },
  title: {
    color: colors.purple,
    marginLeft: 15,
    fontSize: 14,
  },
  description: {
    fontFamily: typography.fontMainLight,
    marginBottom: 10,
  },
});

export default styles;
