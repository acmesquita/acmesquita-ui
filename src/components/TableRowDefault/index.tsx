import React from 'react';
import { TableRow, TableRowProps } from '@material-ui/core';

// import { Container } from './styles';

export const TableRowDefault: React.FC<TableRowProps> = ({
  children
}) => {
  return (
    <TableRow >
      {children}
    </TableRow>
  );
}
