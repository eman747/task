import {StyleSheet} from 'react-native';
import palette from '../../../theme/palette';
import {spacing} from '../../../theme/spacing';

export default styles = StyleSheet.create({
  body: {
    marginTop: spacing.medium,
    marginHorizontal: spacing.medium,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 18,
    color: palette.black,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: palette.black,
    fontWeight: '500',
  },
  footer: {
    flex: 1,
    bottom: 30,
    justifyContent: 'flex-end',
    marginHorizontal: spacing.medium,
  },
});
