import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ExpensesData } from '../../../hooks/useExpenses';
import Colors from '../../../theme/Colors';
import { Size } from '../../../theme/Layout';

interface PropsItem {
  expense: ExpensesData;
  action: (item: ExpensesData) => void;
  onPress: (id: string) => void;
}

export default function ListItem({ expense, action, onPress }: PropsItem) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        padding: Size.s16,
        borderRadius: Size.s16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
      key={expense?.id}
      onPress={() => onPress(expense.id)}>
      <Text
        style={{
          fontSize: Size.s20,
          color: expense.tipo === 'Receita' ? Colors.green : Colors.red,
        }}>
        {expense.id} - {expense.nome}
      </Text>
      <TouchableOpacity onPress={() => action(expense)}>
        <Icon name="trash-outline" size={25} color={Colors.gray} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
