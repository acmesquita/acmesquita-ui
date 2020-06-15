import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table, { TableProps } from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const TableDefault: React.FC<TableProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {children}
      </Table>
    </TableContainer>
  );
}
