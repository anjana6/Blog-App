import React,{useContext} from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    
    navigation.setOptions({
        headerRight: () => 
            <TouchableOpacity onPress={()=>{navigation.navigate('Create')}}>
                <Feather style={styles.plusButton} name="plus"/>
            </TouchableOpacity> 
    });
   
    const {data,deleteBlogPost} = useContext(BlogContext);
    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
                    <View style={styles.row}> 
                        <Text style={styles.title}>{item.title}-{item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon}/>
                        </TouchableOpacity>
                    </View> 
                    </TouchableOpacity>
                );
                }}
            />
        </View>
    )
};



export const createScreen = ({navigation}) => {
    navigation.navigate('Create');
    
}


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
    },
    plusButton:{
        fontSize:30,
        marginRight:20,
        backgroundColor:"#1E90FF"
    }
})

export default IndexScreen;
