import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated, Image } from 'react-native';
import TabBar from '../comps/TabBar';


function MainMenu(){
    return (
        <View style={{flex:1, flexDirection:'row'}}>
            <TabBar
            title={'header 1'} />
            <TabBar
            title={'header 2'} />
            <TabBar
            title={'header 3'} />
        </View>
    )
}

export default MainMenu;