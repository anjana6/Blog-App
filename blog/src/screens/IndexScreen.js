import React,{useContext} from 'react'
import {View,Text,StyleSheet, Button} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({navigation}) => {
    const vlaue = useContext(BlogContext);
    return (
        <View>
            <Text>Home Screen</Text>
    <Text>{vlaue}</Text>
            <Button 
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
                />
        </View>
    )
}

export default IndexScreen;
