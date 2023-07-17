import { StatusBar } from 'expo-status-bar';

import { Container, Content } from './styled';
import { ConstantsNavigation } from '../../navigation/constants';
import Colors from '../../theme/Colors';
import { Button } from '../button';

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
