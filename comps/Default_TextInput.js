import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Animated,Image,Icon } from "react-native";

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
        //marginTop:300,
        width:widScale
    }}
      >
        <Image
        style={{
            width:25,
            height:25,
            position:'absolute',
            zIndex:20,
            marginTop:15,
            paddingLeft:20
        }}
        source={{uri:"http://icons.iconarchive.com/icons/icons8/windows-8/512/Editing-Text-icon.png"}}
        />
        <TextInput
          style={{
            width: 350,
            paddingStart:30,
            height: 50,
            backgroundColor: "#ffffff",
            borderRadius:10,
            shadowColor:'#000000',
            shadowOffset:{x:3,y:3},
            shadowRadius:10,
            shadowOpacity:0.1,
          }}
          placeholder={"Default placeholder"}
          //onChangeText={(text)=>{}}
        >
            </TextInput>
      </Animated.View>
    </View>
  );
}

export default Default_TextInput;
