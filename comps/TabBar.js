import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated, Image } from 'react-native';
import axios from 'axios';


function TabBar() {
  const [op] = useState(new Animated.Value(0));
  const [height, setHieght] = useState("8%");
  var click = 0;
  const [width, setWidth] = useState("40%");
  const [bg_color] = useState(new Animated.Value(1));
  var my_bg = bg_color.interpolate({
      inputRange: [0, 1],
      outputRange: ["blue", "red"]}
      )
 

  //run when the component loads

  useEffect(()=>{
    Animated.timing
    (op,
      {
        toValue:1,
        duration:2000
      }
      ).start();},[]);

  //run when text is changed

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Animated.View style={{width:width, height:height,  justifyContent:'center', alignItems:'center',backgroundColor:my_bg,  borderTopLeftRadius:40,  borderTopRightRadius:40 }}>
   
      <Image style={{width:25, height:25}} source={require("../Assets/21837-200.png")}></Image>

      <Button 
      style={{backgroundColor:my_bg, width:100, height:50}}
       title='Default Tab'
      onPress={()=>{
        setHieght('10%')
        setWidth('45%')
        click += 1;
        if (click === 1){
        Animated.timing(
          bg_color,
          {
            toValue:0,
            duration:500
          }
            ).start()
      }
      if (click === 2){
        setHieght('8%')
        setWidth('40%')
        Animated.timing(
          bg_color,
          {
            toValue:1,
            duration:500
          }
            ).start()
      } if (click >= 3) {
        click = 0;      }
     
    }
    
    }
      />
    </Animated.View>
    </View>
  );
};
export default TabBar;