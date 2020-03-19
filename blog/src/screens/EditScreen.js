import React,{useState,useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';

const EditScreen = ({route}) => {
    const {id} = route.params;
    const {data} = useContext(BlogContext)
    return (
        <View>
            <Text>edit{id}</Text>
        </View>
    )
}

export default EditScreen;
