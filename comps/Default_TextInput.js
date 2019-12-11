import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Animated } from "react-native";

function Default_TextInput() {
    const [widScale] = useState(new Animated.Value("0%"));
    useEffect(()=>{
        Animated.timing(
            widScale,
            {
                toValue:"100%",
                duration:1000
            }
        ). start();
    }, []);
  return (
    <View >
      <Animated.View
      style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:300,
        width:"100%"
    }}
      >
        <TextInput
          style={{
            width: 350,
            height: 50,
            backgroundColor: "#d3d3d3",
            borderRadius:10,
          }}
          placeholder={"Default placeholder"}
        />
      </Animated.View>
    </View>
  );
}

export default Default_TextInput;
