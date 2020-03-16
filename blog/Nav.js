import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screens/IndexScreen';


const Stack = createStackNavigator();

const Naviget = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={IndexScreen} options={{title:'Blog'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Naviget;
