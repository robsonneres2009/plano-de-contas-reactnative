import { Text, View } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Card from "../../components/card";
import CustomSearchBar from "../../components/searchBar";
import style from "./styled";
import { ExpensesContext, ExpensesData } from "../../hooks/useExpenses";
import { deburr } from "lodash";
import { List } from "../../components/list";
import { Modal } from "../../components/modal";
import { useNavigation } from "@react-navigation/native";
import { ConstantsNavigation } from "../../navigation/constants";
import { ProfileScreenNavigationProp } from "./types";

export default function Home() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { expenses, removeExpense } = useContext(ExpensesContext);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [expenseFiltered, setExpenseFiltered] = useState(expenses);
  const [isVisibleModalDelete, setVisibleModalDelete] = useState(false);
  const [selectedItemDelete, setSelectedItemDelete] = useState(
    {} as ExpensesData
  );
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    handlerFilter();
  }, [searchQuery]);

  useEffect(() => {
    setExpenseFiltered(expenses);
    setSearchQuery("");
  }, [expenses]);

  const handlerFilter = useCallback(() => {
    const filteredExpense = expenses?.filter((expense) =>
      deburr(expense.nome.toLowerCase()).includes(
        deburr(searchQuery.toLowerCase())
      )
    );

    setExpenseFiltered(filteredExpense);
  }, [searchQuery]);

  const handlerCloseModal = () => {
    setVisibleModalDelete(false);
  };

  const handlerOpenModalDelete = (item: ExpensesData) => {
    setSelectedItemDelete(item);
    setVisibleModalDelete(true);
  };

  return (
    <View style={style.container}>
      <CustomSearchBar
        placeholder="Pesquisar conta"
        onChange={onChangeSearch}
        value={searchQuery}
      />

      {isVisibleModalDelete && (
        <Modal.Delete
          key="modal-delete"
          onClose={handlerCloseModal}
          onDelete={() => {
            removeExpense(selectedItemDelete?.id);
            handlerCloseModal();
          }}
          item={selectedItemDelete}
        />
      )}

      <Card>
        <View style={style.wrapper}>
          <Text style={style.title}>Listagem</Text>
          <Text style={style.label}>{expenseFiltered?.length} registros</Text>
        </View>

        <List.Container
          data={expenseFiltered}
          action={handlerOpenModalDelete}
          onPress={(id: string) => {
            navigation.navigate(ConstantsNavigation.NAME_CREATE, { id });
          }}
        />
      </Card>
    </View>
  );
}
