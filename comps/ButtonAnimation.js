import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

function ButtonAnimation(){

    const [dim] = useState(new Animated.Value(50));
   
useEffect(()=>{
    Animated.timing(
        dim,
        {
          toValue:200,
          duration:500
        }
      ).start();
}, []);

    return(
        <Animated.View style={{flex:1, width:dim, height:dim}}>
            
            <TouchableOpacity style={styles.NButton}            >
                
                <Image 
                    source={require('../Imgs/button.png')}
                    style={{width: 50, height: 50}}
                
                />
                <Text>default button</Text>
               
            </TouchableOpacity>
            
        </Animated.View>

    )
}

export default ButtonAnimation;

