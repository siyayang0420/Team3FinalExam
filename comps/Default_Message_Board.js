
import React, {useState, useEffect} from 'react';
import {Text, View, Animated,Image} from 'react-native';
import DefaultImage from './DefaultImage';
import Default_Send_Bar from './Default_Send_Bar';
import Default_Message from './Default_Message';
function Default_Message_Board(props){



    return(
        <View>
            <Default_Message/>
            <Default_Send_Bar/>
        </View>    

    )
}



export default Default_Message_Board;

