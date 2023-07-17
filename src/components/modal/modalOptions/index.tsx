import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native';

import style from './styled';
import Colors from '../../../theme/Colors';
import { Button } from '../../button';

interface Props {
  onClose: () => void;
  onClick: (id: string) => void;
  items: Options[];
}

interface Options {
  label: string;
  value: string;
}

export default function ModalOptions({ onClose, onClick, items }: Props) {
  return (
    <View style={style.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          onClose();
        }}>
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <ScrollView style={style.scrollView}>
              {items?.map(item => {
                return (
                  <TouchableHighlight
                    onPress={() => onClick(item.value)}
                    style={style.containerOptions}
                    underlayColor={Colors.pink}
                    key={item.label}>
                    <Text>{item.label}</Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
            <View style={style.containerButtons}>
              <Button.Default onPress={onClose} title="Cancelar" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
