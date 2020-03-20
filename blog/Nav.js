import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

 
const Stack = createStackNavigator();

const Naviget = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen 
          name="Index" 
          component={IndexScreen} 
          options={{title:'Blog List'}} 
        />
        <Stack.Screen 
          name="Show" 
          component={ShowScreen}
          options={{title:'Blog List'}}
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


export default Naviget;
