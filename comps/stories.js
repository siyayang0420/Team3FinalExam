import React from 'react';
import { Text } from 'react-native';

import TabBar from './TabBar';
import { storiesOf } from '@storybook/react-native';



storiesOf("My Custom Buttons", module)  
.add('first button', ()=>{return (
<TabBar/>    ) 
 }
);