import React,{useState} from "react";
import {Form,Label,Input,Button} from "reactstrap";
import {useContext} from "../contextProvider";
import * as actions from "../actions";

const ToDoForm = ()=>{
  const [state,dispatch] = useContext();

  const [task,setTask] = useState("");

  return(
    <Form
      className="py-4 d-flex flex-column"
    >
      <Label className="h5 d-flex justify-content-center mt-3">New Task</Label>
      <hr className="w-100"/>
      <Label
        className="ml-5 my-2"
      >Task Name</Label>
      <Input
        className="col-10 mx-auto"
        onChange={(e)=>setTask(e.target.value)}
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
              dispatch(actions.editItem(task))
              setTask("")
            }}
          >Edit</Button>
          ) : (
          <Button
            color="success"
            className="mr-1"
            onClick={()=>{
              dispatch(actions.addItem(task))
              setTask("")
            }}
          >Add</Button>
          )
        }
        <Button
          color="danger"
          className="ml-1"
          onClick={()=>dispatch(actions.toggleForm())}
        >
          Close
        </Button>
      </div>
    </Form>
  )
}

export default ToDoForm;