import {StyleSheet} from 'react-native';
import palette from '../../../theme/palette';
import {spacing} from '../../../theme/spacing';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.primary,
    paddingHorizontal: spacing.small,
  },
  header: {
    marginTop: spacing.medium,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: palette.black,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
  },
});
