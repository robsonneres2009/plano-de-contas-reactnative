import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../../theme/Colors';

interface Props {
  onClick: () => void;
}

export default function ButtonSave({ onClick }: Props) {
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name="checkmark-outline" size={40} color={Colors.white} />
    </TouchableOpacity>
  );
}
