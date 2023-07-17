import { ReactNode } from "react";
import { View } from "react-native";
import style from "./styled";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <View style={style.container}>{children}</View>;
}
