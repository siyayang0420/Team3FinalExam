import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Animated,
  Image,
  TouchableOpacity
} from "react-native";

function Default_Send_Bar(props) {
  const [widScale] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(widScale, {
      toValue: 350,
      duration: 1000
    }).start();
  }, []);
  return (
    <View
      
    >
      <Animated.View
        style={{
          marginTop: 300,
          width: widScale,
        }}
      >

          <View></View>
        <View
        >
          <Image
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              zIndex: 20,
              marginTop: 10,
            //   paddingLeft: -100
            }}
            source={{
              uri:
                "http://icons.iconarchive.com/icons/icons8/windows-8/512/Editing-Text-icon.png"
            }}
          />
          <View style={{
              flexDirection:'row'
          }}>
          <TextInput
            style={{
              width: 280,
              paddingStart: 30,
              height: 50,
              backgroundColor: "#ffffff",
              borderRadius: 10,
              shadowColor: "#000000",
              shadowOffset: { x: 3, y: 3 },
              shadowRadius: 10,
              shadowOpacity: 0.1
            }}
            placeholder={"Send Message"}
          ></TextInput>
          
           <TouchableOpacity>
            <View
            style={{
                marginLeft:10,
                width:80,
                height:50,
                borderRadius:10,
                backgroundColor:'skyblue',
                justifyContent:"center",
                alignItems:'center',
                flexDirection:'row'
            }}>
                <Image
                style={{
                    width:30,
                    height:30,
                    // zIndex:100,
                    // backgroundColor:'#000000'
                }}
                source={{uri:'https://static.thenounproject.com/png/68669-200.png'}}
                />
                <Text style={{
                    color:"#ffffff"
                }}>
                    Send
                </Text>

            </View>
        </TouchableOpacity>
        </View>

       
        </View>
      </Animated.View>
    </View>
  );
}

export default Default_Send_Bar;
