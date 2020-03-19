import React,{useState,useContext} from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const CreateScreen = ({navigation}) =>{
    const {addBlogPost}  = useContext(BlogContext)
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    return (
        <View style={styles.styleView}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button onPress={() =>{addBlogPost(title,content, () => {navigation.navigate('Index')});}}  title="Add Blog Post"/>
        </View>
    )
} ;

const styles = StyleSheet.create({
    styleView:{
        padding:10
    },
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        padding:5,
        margin:5,
        marginBottom:10
    },
    label:{
        fontSize:20,
        marginBottom:10
    }

})

export default CreateScreen;
