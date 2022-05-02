import React, { ReactNode } from "react";
import Svg from "react-native-svg";
import styled from "styled-components/native";
import { Info } from "../../assets/icons";
import Spacer from "./Spacer";
import { Text } from "./Text";

type AlertType = "info" | "warning" | "error";

type AlertProps = {
  type: AlertType;
  children: ReactNode;
};

const ICONS: Record<AlertType, JSX.Element> = {
  info: <Info color="info" />,
  warning: <Info color="info" />,
  error: <Info color="info" />,
} as const;

export default function Alert({ type, children }: AlertProps) {
  return (
    <Container type={type}>
      {ICONS[type]}

      <Spacer axis="horizontal" size={0.5} />

      <Text>{children}</Text>
    </Container>
  );
}

const Container = styled.View<{ type: AlertType }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[2]};
  background-color: ${({ theme, type }) => theme.colors[type][50]};
  border-radius: ${({ theme }) => theme.border.radius.md};
  border: 1px solid ${({ theme, type }) => theme.colors[type][100]};
`;
