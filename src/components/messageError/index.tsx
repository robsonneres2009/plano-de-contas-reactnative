import { Container, Label } from './styled';

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
