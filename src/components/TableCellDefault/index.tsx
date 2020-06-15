import React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

// import { Container } from './styles';

export const TableCellDefault: React.FC<TableCellProps> = ({
  children
}) => {
  return (
    <TableCell >
      {children}
    </TableCell>
  );
}
