import {StyleSheet} from 'react-native';
import palette from '../../../theme/palette';
import {spacing} from '../../../theme/spacing';

export default styles = StyleSheet.create({
  footer: {
    alignItems: 'flex-end',
    margin: spacing.mini,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPriceText: {
    color: palette.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  noItemsText: {
    color: palette.black,
    fontSize: 16,
    fontWeight: '300',
  },
});
