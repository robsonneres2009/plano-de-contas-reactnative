import { ButtonContainer, ButtonText, CustomButton } from './styles';

interface Props {
  title: string;
  onPress: () => void;
  secundary?: boolean;
}

export default function ButtonDefault({
  title,
  onPress,
  secundary = false,
}: Props) {
  return (
    <ButtonContainer>
      <CustomButton onPress={onPress} secundary={secundary}>
        <ButtonText secundary={secundary}>{title}</ButtonText>
      </CustomButton>
    </ButtonContainer>
  );
}
