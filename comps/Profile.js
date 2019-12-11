import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Default_TextInput from './Default_TextInput';
import ButtonAnimation from './ButtonAnimation';
import DefaultImage from './DefaultImage';


function Profile(props){
    const [title, setTitle] = useState('');
    const [placeholderTxt, SetPlaceholderTxt] = useState('');
    return(
        <View style={{marginTop:100}}>
             <DefaultImage style={{marginLeft: 50}}/>

            <View style={{alignItems:"center", justifyContent:"center", marginTop:60}}>
                <Text>Username</Text>
                <Default_TextInput 
                    placeholderTxt={"ttt"}
                />
                <Text>Image URL</Text>
                <Default_TextInput 
                    placeholderTxt={"ddd"}
                />
                
                <ButtonAnimation 
                title={"save"}


                />
            </View>
        </View>
    )
}


export default Profile;