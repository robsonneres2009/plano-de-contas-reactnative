import { StatusBar } from "expo-status-bar";
import Colors from "../../theme/Colors";
import { Container, Content } from "./styled";
import { Button } from "../button";
import { ConstantsNavigation } from "../../navigation/constants";

interface Props {
  onClick: () => void;
  modeView: boolean;
}

export default function Header({ onClick, modeView }: Props) {
  return (
    <Container>
      <StatusBar backgroundColor={Colors.primary} style="light" />
      <Content>
        <Button.Back title={ConstantsNavigation.TITLE_CREATE} />
        {!modeView && <Button.Save onClick={onClick} />}
      </Content>
    </Container>
  );
}
