import styled from "styled-components/native";
import { Size } from "../../theme/Layout";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
`;

export const Content = styled.View`
  margin-top: ${Size.s16};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
