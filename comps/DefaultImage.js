import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image, Animated} from 'react-native';

function DefaultImage(props){
const [aniW] = useState(new Animated.Value(10));
const [aniH] = useState(new Animated.Value(10));
//not sure if information is passed down properly

useEffect(()=>{
  Animated.timing(
      aniW,
      {
        toValue:50,
        duration:1000
      },
      aniH,
      {
        toValue:50,
        duration:1000
      }
    ).start();
}, []);

    return(
        <Animated.View 
        style={{
        width:aniW, 
        height:aniH, 
        // margin:100,
        marginTop:-15
        }}>
          <View style={{
            marginTop:0,
            backgroundColor:'#dad',
            justifyContent:'center',
            alignItems:"center",
            marginRight:20
          }}
          
          >

          
          <Image
          style={{
          width:50,
          height:50,
          borderRadius:100,
          borderColor:'green',
          borderWidth:2,
        }}
          source={{uri:'https://ntiboilers.com/wp-content/uploads/2018/09/default-placeholder.png'}}
          source={uri=props.uri}
        />
        </View>
       
        </Animated.View>
    );
}


export default DefaultImage;