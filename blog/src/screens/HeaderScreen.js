
import React from 'react';
import {Feather} from '@expo/vector-icons'; 
import {Button } from 'react-native-elements';
import {createScreen} from './IndexScreen';
import { useNavigation} from "@react-navigation/native";

export const By = () => {
    const navigation = useNavigation();
    return(
      <Button onPress={() => createScreen({navigation})} icon={<Feather name="plus" size={20}/>}/>
    )
  }

export const ac = () => {

}

