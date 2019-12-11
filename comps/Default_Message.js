
import React, {useState, useEffect} from 'react';
import {Text, View, Animated,Image} from 'react-native';

function Default_Message(){

    // const [op_value] = useState(new Animated.Value(1));

    return(
        <Animated.View 
        style={{
            justifyContent:'center',
            alignItems:'center',
        }}  
        >
            <View>

            <Image 
                source={{uri: 'https://ntiboilers.com/wp-content/uploads/2018/09/default-placeholder.png'}}
                style={{
                    width: 40, 
                    height: 40,
                    position:"absolute",
                    left:100,
                    borderRadius:20,
                }}
            />
            </View>
            <Text>guest:default message</Text>
        </Animated.View>      

    )
}



export default DefaultMessage;

