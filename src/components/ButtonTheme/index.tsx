import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export interface Props {
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

export const ButtonTheme: React.FC<Props> = ({
  children,
  outlined = false,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        outlined={outlined}
        {...props}
      >
        {children}
      </Container>
    </ThemeProvider>
  )
}
