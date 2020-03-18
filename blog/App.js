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
  );
}

export default App;