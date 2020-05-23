import styled from 'styled-components';
import { Props } from './index'

export const Container = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 1px solid;
  border-color: ${({ borderColor }: Props) => borderColor};
  background: transparent;

  font-size: 16px;
  color: ${({ color }: Props) => color};
  width: ${({ width }: Props) => width}px;

  &:disabled {
    cursor: no-drop;
    opacity: 0.8;
  }
`;
