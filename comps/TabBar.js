import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated, Image } from 'react-native';
import axios from 'axios';


function TabBar({ title, bg, Press }) {
  const [op] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  var click = 0;
  const [width] = useState(new Animated.Value(0));
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
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Animated.View style={{width:my_width, height:my_hight,  justifyContent:'center', alignItems:'center',backgroundColor:bg, borderTopLeftRadius:40,  borderTopRightRadius:40, opacity:op }}>
   
      <Image style={{width:25, height:25}} source={require("../Assets/21837-200.png")}></Image>

      <TouchableOpacity 
      style={{ width:100, height:30}}
      onPress={Press}>
      <Text style={{width:"100%", textAlign:'center'}}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
    </View>
  );
}; 
TabBar.defaultProps = {
  title:"Default Title",
  bg:'blue',
  Press: () => {}
};
export default TabBar;