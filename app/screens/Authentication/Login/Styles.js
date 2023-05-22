import {StyleSheet} from 'react-native';
import palette from '../../../theme/palette';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.primary,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: palette.black,
  },
});
