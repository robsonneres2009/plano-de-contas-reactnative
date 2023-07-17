import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Colors from "../../theme/Colors";
import { Container, Content } from "./styled";
import { Button } from "../button";
import { ConstantsNavigation } from "../../navigation/constants";

interface Props {
  onClick: () => void;
}

export default function Header({ onClick }: Props) {
  return (
    <Container>
      <StatusBar backgroundColor={Colors.primary} style="light" />
      <Content>
        <Button.Back title={ConstantsNavigation.TITLE_CREATE} />
        <Button.Save onClick={onClick} />
      </Content>
    </Container>
  );
}
