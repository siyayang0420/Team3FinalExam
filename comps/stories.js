import React from 'react';
import { Text } from 'react-native';

import TabBar from './TabBar';
import { storiesOf } from '@storybook/react-native';
import MainMenu from './MainMenu';



storiesOf("My Custom Buttons", module)  
.add('TabBar', ()=>{
    return (
<TabBar/>    ) 
 })
.add('MainMenu', ()=>{
    return (
<MainMenu/>    ) 
 }
);