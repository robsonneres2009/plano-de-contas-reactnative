import { Theme } from '@react-navigation/native';

import Colors from '../theme/Colors';

const CustomTheme: Theme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.primary,
    card: 'rgb(255, 255, 255)',
    text: Colors.black,
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};

export default CustomTheme;
