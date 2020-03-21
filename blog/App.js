import * as React from "react";
import Nav from './Nav';
import {BlogProvider} from './src/context/BlogContext';

const App = () => { 
  return (
    <BlogProvider>
      <Nav/>
    </BlogProvider>
  );
}

export default App;