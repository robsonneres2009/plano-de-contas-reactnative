import { StyleSheet } from 'react-native';

import Colors from '../../theme/Colors';
import { Size } from '../../theme/Layout';

export default StyleSheet.create({
  container: {
    width: '100%',
    gap: Size.s4,
  },
  input: {
    width: '100%',
    height: 55,
    padding: Size.s16,
    borderRadius: Size.s10,
    color: Colors.darkgray,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: Size.s16,
    fontWeight: '600',
    color: Colors.black,
  },
});
