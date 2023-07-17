import styled from 'styled-components/native';

import Colors from '../../../theme/Colors';
import { Size } from '../../../theme/Layout';

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CustomButton = styled.TouchableOpacity<{ secundary: boolean }>`
  background-color: ${props =>
    props.secundary ? Colors.lightwhite : Colors.pink};
  color: '#fff';
  padding: ${Size.s10}px ${Size.s20}px;
  border-radius: ${Size.s24}px;
`;

export const ButtonText = styled.Text<{ secundary: boolean }>`
  color: ${props => (props.secundary ? Colors.pink : Colors.lightwhite)};
  font-size: ${Size.s16}px;
`;
