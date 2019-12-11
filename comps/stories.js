import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import ButtonAnimation from './ButtonAnimation';
storiesOf('final', module)
  .add('button', () => {
   return <ButtonAnimation />
  });
  storiesOf('final_comps', module)
  .add('Default TextInput', ()=>{
    return<Default_TextInput/>
  });
    .add("DefaultImage", ()=>{
        return(
            <DefaultImage 
            title="Whooop"
            />
        )
    });

