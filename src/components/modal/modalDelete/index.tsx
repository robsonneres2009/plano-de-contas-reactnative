import { Modal, Text, View } from "react-native";
import style from "./styled";
import Colors from "../../../theme/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "../../button";
import { ExpensesData } from "../../../hooks/useExpenses";

interface Props {
  onClose: () => void;
  onDelete: (id: string) => void;
  item: ExpensesData;
}

export default function ModalDelete({ onClose, onDelete, item }: Props) {
  return (
    <View style={style.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          onClose();
        }}
      >
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Icon name="trash-outline" size={50} color={Colors.pink} />
            <Text style={style.modalText}>Deseja excluir a conta</Text>
            <Text style={style.modalTitle}>
              {`${item?.id} - ${item?.nome}`}?
            </Text>
            <View style={style.containerButtons}>
              <Button.Default secundary title="Não!" onPress={onClose} />
              <Button.Default
                title="Com certeza"
                onPress={() => onDelete(item.id)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
