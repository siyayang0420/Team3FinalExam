import React, { useState } from 'react';
import {View, Text} from 'react-native';
import Default_TextInput from './Default_TextInput';
import ButtonAnimation from './ButtonAnimation';
import DefaultImage from './DefaultImage';


function Profile(props){
    const [title, setTitle] = useState('');
    const [placeholderTxt, SetPlaceholderTxt] = useState('');
    const [users, setUsers] = useState([]);

    const CreateUser = async()=>{
        //fetch db to create users
        var obj = {
            key:"message_create",
            data:{
                username: username,
                uri: uri,
                message: message
            }
        }
        var r = await axios.post("https://adifetch.herokuapp.com/post", obj);
    }

    const ReadUsers = async()=>{
        var obj = {
            key:"message_read",
            data:{}
        }
                  //ios can use local host, localhost:3001/post
        var r = await axios.post("https://adifetch.herokuapp.com/post", obj);

        var dbusers = JSON.parse(r.data.body);
        console.log("read", dbusers);
        setUsers(dbusers.data);
    }

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