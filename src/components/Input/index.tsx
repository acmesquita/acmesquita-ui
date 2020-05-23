import React from 'react';
import { Container } from './styles';

export interface Props {
  /**
   * Cor da linha do input
   */
  borderColor?: string;
  /**
   * Cor da fonte
   */
  color?: string
  /**
   * Desabilitado
   */
  disabled?: boolean
  /**
   * Value
   */
  value?: string
  /**
   * Tamanho do campo
   */
  width?: number
  /**
   * Tipo do campo
   */
  type?: string
}

export const Input: React.FC<Props> = ({
  borderColor = '#7159c1',
  color = '#fff',
  value,
  width = 250,
  type = 'text',
  ...props
}) => {
  return (
    <Container
      borderColor={borderColor}
      color={color}
      value={value}
      width={width}
      type={type}
      {...props}
    />
  )
}
