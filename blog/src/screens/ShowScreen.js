import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const ShowScreen = ({route,navigation}) =>{
    const {id} = route.params;
    const {data} = useContext(BlogContext);

    const blogPost = data.find((blogpost) => blogpost.id === id);
    return (
       <View>
           <Text>{blogPost.title}</Text>
       </View>
    )
}

export default ShowScreen;
