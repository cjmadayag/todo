import React from 'react';
import ContextProvider from "./contextProvider";
import ToDo from "./pages/ToDo";

const App = ()=>{
  return (
    <ContextProvider>
      <ToDo/>
    </ContextProvider>
  );
}

export default App;