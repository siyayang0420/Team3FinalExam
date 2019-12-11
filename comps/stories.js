import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';
import Default_TextInput from './Default_TextInput';
import Defaut_Message_Board from "./Defaut_Message_Board";
import ButtonAnimation from './ButtonAnimation';
import Profile from './Profile';
import TabBar from './TabBar';
import MainMenu from './MainMenu';


  
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

  .add('Defaut Message Board', ()=>{
    return<Defaut_Message_Board/>
  })
  .add('button', () => {
    return <ButtonAnimation />
   })
   .add('Default Image', () => {
    return <DefaultImage />
   })

storiesOf("Tab Bars", module)  
.add('TabBar', ()=>{
    return (
<TabBar/>    ) 
 })
.add('MainMenu', ()=>{
    return (
<MainMenu/>    ) 
 }
);
