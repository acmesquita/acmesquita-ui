import React from 'react';
import { storiesOf } from '@storybook/react';
import { TableDefault, TableHeaderDefault, TableCellDefault, TableBodyDefault, TableRowDefault } from '../src';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

storiesOf('TableDefault', module)
  .add('default',
  () => (
  <TableDefault>
    <TableHeaderDefault>
      <TableCellDefault>Dessert (100g serving)</TableCellDefault>
      <TableCellDefault align="right">Calories</TableCellDefault>
      <TableCellDefault align="right">Fat&nbsp;(g)</TableCellDefault>
      <TableCellDefault align="right">Carbs&nbsp;(g)</TableCellDefault>
      <TableCellDefault align="right">Protein&nbsp;(g)</TableCellDefault>
    </TableHeaderDefault>
    <TableBodyDefault>
      {rows.map((row) => (
        <TableRowDefault key={row.name}>
          <TableCellDefault component="th" scope="row">
            {row.name}
          </TableCellDefault>
          <TableCellDefault align="right">{row.calories}</TableCellDefault>
          <TableCellDefault align="right">{row.fat}</TableCellDefault>
          <TableCellDefault align="right">{row.carbs}</TableCellDefault>
          <TableCellDefault align="right">{row.protein}</TableCellDefault>
        </TableRowDefault>
      ))}
    </TableBodyDefault>
  </TableDefault>
))
