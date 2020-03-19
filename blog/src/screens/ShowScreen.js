import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

let id = 0;
const ShowScreen = ({route}) =>{
    id = route.params.id;
    // console.log(id);
    // const {id} = route.params;
    const {data} = useContext(BlogContext);

    const blogPost = data.find((blogpost) => blogpost.id === id);
    return (
       <View>
           <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
       </View>
    )
}

 export const editScreen = ({navigation}) => {
    navigation.navigate('Edit',{id:id})
}



export default ShowScreen;
