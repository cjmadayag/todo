import ACTIONS from "./actionTypes";

export const toggleForm = ()=>({type:ACTIONS.TOGGLE_FORM})
export const toggleEditForm = (item)=>({type:ACTIONS.TOGGLE_EDIT_FORM,payload:item})
export const addItem = (item)=>({type:ACTIONS.ADD_ITEM,payload:{item}})
export const editItem = (item)=>({type:ACTIONS.EDIT_ITEM,payload:{item}})
export const deleteItem = (id)=>({type:ACTIONS.DELETE_ITEM,payload:{id}})
export const completeTask = (id)=>({type:ACTIONS.COMPLETE_TASK,payload:{id}})