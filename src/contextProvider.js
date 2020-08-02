import React,{useReducer} from "react";
import reducer from "./reducer"

export const createContext = React.createContext();

export const useContext = ()=>{
  return React.useContext(createContext)
};

export default ({children})=>{
  const initialState = {
      list:[],
      toggleForm:false,
      isEditing:false,
      itemToEdit:{}
    }

  const [state,dispatch] = useReducer(reducer,initialState)

  return(
    <createContext.Provider value={[state,dispatch]}>
      {children}
    </createContext.Provider>
  )
}