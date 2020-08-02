import ACTIONS from "./actionTypes"

export default (state,action)=>{
    let newList = [];
    switch (action.type){
      case ACTIONS.ADD_ITEM:
        return {...state,list:[...state.list,{id:Date.now(),item:action.payload.item,isDone:false}],toggleForm:false}
  
      case ACTIONS.EDIT_ITEM:
        newList = state.list.map(item=>{
          if(item.id === state.itemToEdit.id){
            item.item = action.payload.item
          }
          return item
        })
        return {...state,list:newList,isEditing:false,itemToEdit:{},toggleForm:false}
  
      case ACTIONS.COMPLETE_TASK:
        newList = state.list.map(item=>{
          if(item.id===action.payload.id){
            item.isDone = true
          }
          return item
        })
        return {...state,list:newList}
      
      case ACTIONS.DELETE_ITEM:
        newList = state.list.filter(item=>(item.id!==action.payload.id))
        return {...state,list:newList}
      
      case ACTIONS.TOGGLE_FORM:
        if(state.toggleForm){
          return {...state,toggleForm:false,isEditing:false,itemToEdit:{}}
        }else{
          return {...state,toggleForm:true}
        }
      
      case ACTIONS.TOGGLE_EDIT_FORM:
        return {...state,toggleForm:true,isEditing:true,itemToEdit:action.payload}
  
      default:
        return action;
    }
  }