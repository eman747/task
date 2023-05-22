import {StyleSheet} from 'react-native';
import palette from '../../../theme/palette';
import {spacing} from '../../../theme/spacing';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.primary,
  },
  body: {
    padding: spacing.mini,
  },
});
