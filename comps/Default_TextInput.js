import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Animated } from "react-native";

function Default_TextInput() {
    const [widScale] = useState(new Animated.Value(0));
    useEffect(()=>{
        Animated.timing(
            widScale,
            {
                toValue:350,
                duration:1000
            }
        ). start();
    }, []);
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center',
    }}>
      <Animated.View
      style={{
        marginTop:300,
        width:widScale
    }}
      >
        <TextInput
          style={{
            width: 350,
            height: 50,
            backgroundColor: "#ffffff",
            borderRadius:10,
            shadowColor:'#000000',
            shadowOffset:{x:3,y:3},
            shadowRadius:10,
            shadowOpacity:0.1
          }}
          placeholder={"Default placeholder"}
        />
      </Animated.View>
    </View>
  );
}

export default Default_TextInput;
