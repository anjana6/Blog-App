import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button,FlatList,TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const IndexScreen = () => {
    const navigation = useNavigation();
   
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

// IndexScreen.navigationOption = () => {
//     return {
//         headerRight: <Feather name="plus"/>
//     }
// }

export const createScreen = ({navigation}) => {
    console.log('ji');
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
    }
})

export default IndexScreen;
