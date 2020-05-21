import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../src';


storiesOf('Button', module)
  .add('default',() => <Button>Default</Button>)
  .add('outline',() => <Button outlined>Outline</Button>)
  .add('disabled',() => <Button disabled>Disabled</Button>)