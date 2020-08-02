import React from 'react';
import {ContextProvider} from "./Context";
import ToDo from "./pages/ToDo";

const App = ()=>{
  return (
    <ContextProvider>
      <ToDo/>
    </ContextProvider>
  );
}

export default App;