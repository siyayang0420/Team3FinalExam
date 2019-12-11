import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated, Image } from 'react-native';
import TabBar from '../comps/TabBar';


function MainMenu({Tabs}){
    const [background1, setBackground1] = useState("blue");
    const [background2, setBackground2] = useState("blue");
    const [background3, setBackground3] = useState("blue");
    return (
        <View style={{flex:1, flexDirection:'row'}}>
           


            <TabBar
            key={1}
            title={'header 1'}
            Press={()=> {
            setBackground1('red')
             setBackground2('blue') 
             setBackground3('blue')}}
            bg={background1}  />
       
            <TabBar
            key={2}
            title={'header 2'}
            Press={()=> {
                setBackground2('red')
                setBackground3('blue')
                setBackground1('blue')}}
            bg={background2}  />
       
            <TabBar
            key={3}
            title={'header 3'}
            Press={()=> {
            setBackground3('red')
            setBackground2('blue')
            setBackground1('blue')} }
            bg={background3}  />
       
        </View>
    )
}

export default MainMenu;