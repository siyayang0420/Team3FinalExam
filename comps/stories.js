import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Default_TextInput from './Default_TextInput';

storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })