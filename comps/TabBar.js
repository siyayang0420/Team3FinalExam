import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated, Image } from 'react-native';
import axios from 'axios';


function TabBar() {
  const [op] = useState(new Animated.Value(0));

  const [height] = useState(new Animated.Value(0));
  var click = 0;
  const [width] = useState(new Animated.Value(0));
  const [bg_color] = useState(new Animated.Value(1));
  var my_bg = bg_color.interpolate({
      inputRange: [0, 1],
      outputRange: ["blue", "red"]}
      )
  var my_hight = height.interpolate({
      inputRange: [0, 1],
      outputRange: [80, 100]}
      )
  var my_width = height.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 140]}
      )
 

  //run when the component loads

  useEffect(()=>{
    Animated.timing(
      op,
      {
        toValue:1,
        duration:1000
      },
      ).start();},[]);

  useEffect(()=>{
    Animated.timing(
      height,
      {
        toValue:1,
        duration:2000
      },
      ).start();},[op]);

  useEffect(()=>{
    Animated.timing(
      width,
      {
        toValue:1,
        duration:2000
      },
      ).start();},[op]);

  //run when text is changed

  return (
    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <Animated.View style={{width:my_width, height:my_hight,  justifyContent:'center', alignItems:'center',backgroundColor:my_bg, borderTopLeftRadius:40,  borderTopRightRadius:40, opacity:op }}>
   
      <Image style={{width:25, height:25}} source={require("../Assets/21837-200.png")}></Image>

      <TouchableOpacity 
      style={{ width:100, height:30}}
       
      onPress={()=>{
        // setHieght('10%')
        // setWidth('45%')
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
        // setHieght('8%')
        // setWidth('40%')
        Animated.timing(
          bg_color,
          {
            toValue:1,
            duration:500
          }
            ).start()
      } if (click >= 3) {
        click = 0;      }
     
      }}>
        <Text style={{width:"100%", textAlign:'center'}}>Click</Text>
      </TouchableOpacity>
    </Animated.View>
    </View>
  );
};
export default TabBar;