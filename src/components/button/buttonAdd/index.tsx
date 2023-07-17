import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ConstantsNavigation } from '../../../navigation/constants';
import { ProfileScreenNavigationProp } from '../../../screens/home/types';
import Colors from '../../../theme/Colors';

export default function ButtonAdd() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ConstantsNavigation.NAME_CREATE, { id: '' })
      }>
      <Icon name="add-outline" size={40} color={Colors.white} />
    </TouchableOpacity>
  );
}
