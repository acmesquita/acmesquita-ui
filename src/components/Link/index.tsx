import React from 'react';
import styled from 'styled-components';
// import { Container } from './styles';

export const Link: React.FC = ({children}) => {
  const LinkStyle = styled.a`
    text-decoration: none;
  `;

  return <LinkStyle href="">{children}</LinkStyle>;
}
