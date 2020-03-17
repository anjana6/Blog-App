import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {
    const {data,addBlogPost,deleteBlogPost} = useContext(BlogContext);
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                return (
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}-{item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                    </View> 
                );
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;