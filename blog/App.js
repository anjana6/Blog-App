import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screens/IndexScreen';
import Nav from './Nav';
import {BlogProvider} from './src/context/BlogContext';

// const Stack = createStackNavigator();

const App = () => { 
  return (
    <BlogProvider>
      <Nav/>
    </BlogProvider>
    
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Index">
    //     <Stack.Screen name="Index" component={IndexScreen} options={{title:'Blog'}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;

// const About = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>About Screen</Text>
//       <Button title="Home Page" onPress={() => navigation.navigate("Home")} />
//     </View>
//   );
// };