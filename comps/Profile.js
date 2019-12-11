import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Default_TextInput from './Default_TextInput';
import ButtonAnimation from './ButtonAnimation';


function Profile(props){
    const [title, setTitle] = useState('save');
    //const [username, setUsername]
    return(
        <View>

            <View style={{alignItems:"center", justifyContent:"center", marginTop:60}}>
                <Text>Username</Text>
                <Default_TextInput />
                <Text>Image URL</Text>
                <Default_TextInput />
                
                <ButtonAnimation 
                title={title}
                />
            </View>
        </View>
    )
}


export default Profile;