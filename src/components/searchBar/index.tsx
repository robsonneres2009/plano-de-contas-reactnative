import { Searchbar } from 'react-native-paper';

import style from './styled';

type Props = {
  placeholder: string;
  value: string;
  onChange: (query: string) => void;
};

export default function CustomSearchBar({
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      style={style.inputSearch}
    />
  );
}
