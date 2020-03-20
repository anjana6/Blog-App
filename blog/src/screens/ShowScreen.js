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
       <View>
           <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
       </View>
    )
}

const style = StyleSheet.create({
    pencilButton:{
        fontSize:30,
        marginRight:20,
        backgroundColor:"#1E90FF"
    }
})



export default ShowScreen;
