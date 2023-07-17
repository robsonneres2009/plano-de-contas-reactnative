import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ConstantsNavigation } from '../../navigation/constants';

export type RootStackParamList = {
  Home: undefined;
  Create: { id: string };
};

export type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  ConstantsNavigation.NAME_HOME
>;
export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ConstantsNavigation.NAME_HOME
>;

export type ProfileScreenProps = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};
