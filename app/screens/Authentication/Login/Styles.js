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
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: palette.red,
    marginLeft: spacing.micro,
    marginTop: spacing.micro,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary,
  },
});
