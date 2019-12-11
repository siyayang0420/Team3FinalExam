import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import Default_TextInput from './Default_TextInput';
import Defaut_Message_Board from "./Defaut_Message_Board";
import ButtonAnimation from './ButtonAnimation';


    


  
  storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  })
  .add('Defaut Message Board', ()=>{
    return<Defaut_Message_Board/>
  })
  .add('button', () => {
    return <ButtonAnimation />
   })
    .add("DefaultImage", ()=>{
      return
          <DefaultImage 
          title="Whooop"
          />
      
  });

