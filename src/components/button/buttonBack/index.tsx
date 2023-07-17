import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './styled';
import { ProfileScreenNavigationProp } from '../../../screens/home/types';
import Colors from '../../../theme/Colors';

type Props = {
  title: string;
};

export default function ButtonBack({ title }: Props) {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={style.container}>
      <Icon name="chevron-back-outline" size={40} color={Colors.white} />
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
}
