
import React, {useState, useEffect} from 'react';
import {Text, View, Animated,Image} from 'react-native';
import DefaultImage from './DefaultImage';
function Default_Message(props){

    const [op] = useState(new Animated.Value(0));

    useEffect(()=>{
        Animated.timing(
            op,
            {
              toValue:1,
              duration:1000
            },
          ).start();
      }, []);


    return(
        <Animated.View 
        style={{
            justifyContent:'center',
            alignItems:'center',
            marginTop:200,
            opacity:op
        }}  
        >
            <View style={{
                width:300,
                height:100,
                backgroundColor:'#fab',
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row'
            }}>
            <DefaultImage/>
            <Text>guest:{props.message}default message</Text>
            </View>
            
        </Animated.View>      

    )
}



export default Default_Message;

