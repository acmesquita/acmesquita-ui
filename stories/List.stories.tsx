import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from '../src';

const data = ['João', 'Maria']

storiesOf('List', module)
  .add('default',() => <List data={data}/>)