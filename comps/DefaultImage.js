import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image, Animated} from 'react-native';

function DefaultImage(){

const [op, setOp] = useState(new Animated.Value(1));
const [img, setImg] = useState(true);



    const style = {
    justofyContent:'center',
    alignItems:'center',
    borderRadius:20,
    margin:200
}

//not sure if information is passed down properly

useEffect(()=>{
    Animated.timing(
        op,
        {
            toValue:1,
            duration:3000
        }
    ).start();
}, []);

useEffect(()=>{
    Animated.timing(
      op,
      {
        toValue:0,
        duration:3000
      }
    ).start();
  },{img});


    return(
        <Animated.View style={{opacity:op}}>
            <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://ntiboilers.com/wp-content/uploads/2018/09/default-placeholder.png'}}
        />
        </Animated.View>
    );
}

export default DefaultImage;