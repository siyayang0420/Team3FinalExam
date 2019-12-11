import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Default_TextInput from './Default_TextInput';
import Default_Message from './Default_Message';

storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })

  
storiesOf('final_comps', module)
  .add('Default Message', ()=>{
    return<Default_Message/>
})




