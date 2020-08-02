import React,{useState} from "react";
import {Form,Label,Input,Button} from "reactstrap";
import {useContext,ACTIONS} from "../Context";

const ItemForm = ()=>{
  const [state,dispatch] = useContext();

  const [item,setItem] = useState("");

  return(
    <Form
      className="py-4 d-flex flex-column"
    >
      <Label className="h5 d-flex justify-content-center mt-3">New Item</Label>
      <hr className="w-100 p-0 m-0"/>
      <Label
        className="ml-5 my-2"
      >Item Name</Label>
      <Input
        className="col-10 mx-auto"
        onChange={(e)=>setItem(e.target.value)}
        defaultValue={state.isEditing?state.itemToEdit.item:""}
      />
      <div
        className="mx-auto mt-3"
      >
        {state.isEditing ? (
          <Button
            color="warning"
            className="mr-1"
            onClick={()=>{
              dispatch({type:ACTIONS.EDIT_ITEM,payload:{item}})
              setItem("")
            }}
          >Edit</Button>
          ) : (
          <Button
            color="success"
            className="mr-1"
            onClick={()=>{
              dispatch({type:ACTIONS.ADD_ITEM,payload:{item}})
              setItem("")
            }}
          >Add</Button>
          )
        }
        <Button
          color="danger"
          className="ml-1"
          onClick={()=>dispatch({type:ACTIONS.TOGGLE_FORM})}
        >
          Close
        </Button>
      </div>
    </Form>
  )
}

export default ItemForm;