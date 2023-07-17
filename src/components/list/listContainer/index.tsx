import {
  ListRenderItemInfo,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native";
import Item from "../listItem";
import { Size } from "../../../theme/Layout";
import { ExpensesData } from "../../../hooks/useExpenses";

interface Props {
  action: (item: ExpensesData) => void;
  data: ExpensesData[];
  onPress: (id: string) => void;
}

export default function ListContainer({ action, data, onPress }: Props) {
  const renderItem = ({ item }: ListRenderItemInfo<ExpensesData>) => {
    return <Item expense={item} action={action} onPress={onPress} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ width: "100%", height: 5 }}></View>
        )}
        style={{ marginTop: Size.s16 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={true}
        ListFooterComponent={() => (
          <View style={{ width: "100%", height: 100 }}></View>
        )}
      />
    </SafeAreaView>
  );
}
