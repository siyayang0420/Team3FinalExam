import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ButtonAnimation from './ButtonAnimation';
import Profile from './Profile';


  storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })
  .add('button', () => {
    return <ButtonAnimation />
   });

   storiesOf('combined_comps', module)
  .add('Default Profile', ()=>{
    return<Profile/>
  })
