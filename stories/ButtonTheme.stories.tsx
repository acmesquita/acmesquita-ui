import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonTheme } from '../src';


storiesOf('ButtonTheme', module)
  .add('default', () => <ButtonTheme>Default</ButtonTheme>)
  .add('outline', () => <ButtonTheme outlined>Outline</ButtonTheme>)
  .add('disabled', () => <ButtonTheme disabled>Disabled</ButtonTheme>)