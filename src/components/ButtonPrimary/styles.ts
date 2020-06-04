import styled from 'styled-components';
import { lighten, darken, readableColor } from 'polished';

import { Props } from './index';

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.outlined ? 'transparent' : props.theme.backgroundColor};
  color: ${props =>
    readableColor(props.theme.color as string, '#fff', '#19181f')};
  padding: 32px 81px;
  text-transform: uppercase;
  font-weight: 400;
  border: 0.98px solid #394CE3;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 16.41px;
`;