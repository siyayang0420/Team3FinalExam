import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import ButtonAnimation from './ButtonAnimation';
import Default_TextInput from './Default_TextInput';

    

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