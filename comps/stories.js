import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import Default_TextInput from './Default_TextInput';
import Defaut_Message_Board from "./Defaut_Message_Board";
import Default_Message_Board from "./Default_Message_Board";
import ButtonAnimation from './ButtonAnimation';
import Default_Send_Bar from './Default_Send_Bar';
import Profile from './Profile';



  
  storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })
  .add('Default Message', ()=>{
    return<Default_Message/>
  })

.add('Default Send Bar', ()=>{
  return<Default_Send_Bar/>
  })
  .add('Default Message Board', ()=>{
    return<Default_Message_Board/>
  })
  .add('button', () => {
    return <ButtonAnimation />
   });

   storiesOf('combined_comps', module)
  .add('Default Profile', ()=>{
    return<Profile/>
  })

  .add('button', () => {
    return <ButtonAnimation />
   })
   .add('Default Image', () => {
    return <DefaultImage />
   })
