import * as React from "react";
import { NavigationContainer,useNavigation} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'; 
import {Button } from 'react-native-elements';
import {createScreen} from './src/screens/IndexScreen';
import {By,Ac} from './src/screens/HeaderScreen';
import EditScreen from './src/screens/EditScreen';

 



const Stack = createStackNavigator();

const Naviget = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={{title:'Blog List',headerRight: () =>( <By/>)}} 
        />
        <Stack.Screen 
          name="Show" 
          component={ShowScreen}
          options={{title:'Blog List',headerRight: () => (<Ac/>)}}
        />
        <Stack.Screen 
          name="Create" 
          component={CreateScreen}
          />
        <Stack.Screen 
          name="Edit" 
          component={EditScreen}
          />
     </Stack.Navigator>
    </NavigationContainer>
  );
  
}

// const Bu = () => {
//   const navigation = useNavigation();
//   return(
//     <Button onPress={() => createScreen({navigation})} icon={<Feather name="plus"/>}/>
//   )
// }


export default Naviget;
