import { Text, View } from "react-native";
import { Container, Label } from "./styled";

interface Props {
  message: string;
}

export default function MessageError({ message }: Props) {
  return (
    <Container>
      <Label>{message}</Label>
    </Container>
  );
}
