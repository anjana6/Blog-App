import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button,FlatList} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
    const {data,addBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

export default IndexScreen;
