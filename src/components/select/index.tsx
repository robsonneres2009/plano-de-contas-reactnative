import { TextInputProps, View } from "react-native";
import style from "./styled";

import Input from "../input";
import { Modal } from "../modal";
import { useState } from "react";

interface Props extends TextInputProps {
  label: string;
  options: Array<Options>;
  setSelected: (val: any) => void;
  dropdownShown?: boolean;
}

interface Options {
  label: string;
  value: string;
}

export default function Select({
  label,
  options,
  setSelected,
  dropdownShown = false,
  ...props
}: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <View style={style.container}>
      <Input
        label={label}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        editable={false}
        onPressIn={() => setOpenMenu(true)}
        onPress={() => {
          setOpenMenu(true);
        }}
      />

      {openMenu && (
        <Modal.Options
          onClose={() => setOpenMenu(false)}
          onClick={(value) => {
            setSelected(value);
            setOpenMenu(false);
          }}
          items={options}
        />
      )}
    </View>
  );
}
