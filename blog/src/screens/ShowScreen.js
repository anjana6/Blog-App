import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'; 


const ShowScreen = ({route,navigation}) =>{
  const {id} = route.params;

    navigation.setOptions({
        headerRight: () => 
            <TouchableOpacity onPress={()=>{navigation.navigate('Edit',{id:id})}}>
                <EvilIcons style={style.pencilButton} name="pencil"/>
            </TouchableOpacity> 
    }) 

    const {data} = useContext(BlogContext);

    const blogPost = data.find((blogpost) => blogpost.id === id);
    return (
       <View style={style.viewStyle}>
           <Text style={style.textStyle}>Title:{blogPost.title}</Text>
            <Text style={style.textStyle}>Content:{blogPost.content}</Text>
       </View>
    )
}

const style = StyleSheet.create({
    pencilButton:{
        fontSize:30,
        marginRight:20,
        backgroundColor:"#1E90FF"
    },
    viewStyle:{
        margin:20,
        padding:10,
        borderColor:'black',
        borderWidth:2,
    },
    textStyle:{
        fontSize:20
    }

})



export default ShowScreen;
