import React from 'react';
import { Container } from './styles';

export interface Props {
  /**
   * Cor de fundo
   */
  backgroundColor?: string;
  /**
   * Cor da letra
   */
  color?: string;
  /**
   * Configurar botão outline
   */
  outlined?: boolean;
  /**
   * Função que será executada quando for clicado no botão
   */
  onClick?: () => void;
  /**
   * Opção de desabilitar o botão
   */
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = '#7159c1',
  color = '#fff',
  outlined = false,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      {...props}
    >
      {children}
    </Container>
  )
}
