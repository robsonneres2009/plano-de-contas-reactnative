import styled from 'styled-components/native';

import Colors from '../../theme/Colors';
import { Size } from '../../theme/Layout';

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${Size.s10};
`;

export const Label = styled.Text`
  color: ${Colors.red};
`;
