import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import DefaultImage from './DefaultImage';


storiesOf("default image", module)
    .add("DefaultImage", ()=>{
        return(
            <DefaultImage 
            title="Whooop"
            />
        )
    });