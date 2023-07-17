import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import style from "./styled";

interface Props extends TextInputProps {
  label: string;
  onPress?: () => void;
}

export default function Input(props: Props) {
  return (
    <View style={style.container}>
      <Text style={style.label}>{props.label}</Text>
      <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
        <TextInput {...props} style={style.input} />
      </TouchableOpacity>
    </View>
  );
}
