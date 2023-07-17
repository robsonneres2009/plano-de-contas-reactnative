import { useNavigation } from '@react-navigation/native';
import { deburr } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import style from './styled';
import { ProfileScreenNavigationProp } from './types';
import Card from '../../components/card';
import { List } from '../../components/list';
import { Modal } from '../../components/modal';
import CustomSearchBar from '../../components/searchBar';
import { ExpensesContext, ExpensesData } from '../../hooks/useExpenses';
import { ConstantsNavigation } from '../../navigation/constants';

export default function Home() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { expenses, removeExpense } = useContext(ExpensesContext);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expenseFiltered, setExpenseFiltered] = useState(expenses);
  const [isVisibleModalDelete, setVisibleModalDelete] = useState(false);
  const [selectedItemDelete, setSelectedItemDelete] = useState(
    {} as ExpensesData,
  );
  const onChangeSearch = (query: string) => setSearchQuery(query);

  useEffect(() => {
    handlerFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    setExpenseFiltered(expenses);
    setSearchQuery('');
  }, [expenses]);

  const handlerFilter = useCallback(() => {
    const filteredExpense = expenses?.filter(expense =>
      deburr(expense.nome.toLowerCase()).includes(
        deburr(searchQuery.toLowerCase()),
      ),
    );

    setExpenseFiltered(filteredExpense);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
