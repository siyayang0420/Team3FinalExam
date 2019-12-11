import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import Default_TextInput from './Default_TextInput';
import Default_Message from './Default_Message';
import Defaut_Message_Board from "./Defaut_Message_Board";
import ButtonAnimation from './ButtonAnimation';


  
  storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })
storiesOf('final_comps', module)
  .add('Default Message', ()=>{
    return<Default_Message/>
})

  .add('Defaut Message Board', ()=>{
    return<Defaut_Message_Board/>
  })
  .add('button', () => {
    return <ButtonAnimation />
   })
   .add('Default Image', () => {
    return <DefaultImage />
   })

