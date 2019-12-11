import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, Animated } from 'react-native';
import axios from 'axios';

function Main() {
  const [op] = useState(new Animated.Value(0));

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
    <Animated.View style={{width:100, height:500, opacity:op}}>
      <Text>Opacity is 1 when it loads</Text>

      <TouchableOpacity onPress={()=>{setText("New Text")}} style={{width:100, height:50}} />
    </Animated.View>
  );
};
export default Main;