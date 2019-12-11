import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import ButtonAnimation from './ButtonAnimation';

storiesOf('final', module)
  .add('button', () => {
   return <ButtonAnimation />
  });
  