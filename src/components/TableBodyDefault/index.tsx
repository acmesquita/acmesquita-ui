import React from 'react';
import { TableBody, TableBodyProps } from '@material-ui/core';

// import { Container } from './styles';


export const TableBodyDefault: React.FC<TableBodyProps> = ({children}) => {
  return (
    <TableBody>
      {children}
    </TableBody>
  );
}
