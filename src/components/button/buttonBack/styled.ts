import { StyleSheet } from 'react-native';

import Colors from '../../../theme/Colors';
import { Size } from '../../../theme/Layout';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: Size.s24,
    fontWeight: 'bold',
  },
});
