import React from 'react';
import { TableHead, TableRow, TableHeadProps } from '@material-ui/core';

// import { Container } from './styles';

export const TableHeaderDefault: React.FC<TableHeadProps> = ({children}) => {
  return (
    <TableHead>
      <TableRow>
        {children}
      </TableRow>
    </TableHead>
  );
}
