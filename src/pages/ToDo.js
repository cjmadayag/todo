import React from "react";
import {useContext,ACTIONS} from "../Context";
import {Form,Label,Button,Modal} from "reactstrap";
import {ItemForm,ItemList} from "../components";

const ToDo = ()=>{
  const [state,dispatch] = useContext();
    
  return(
    <div className="container">
      <Form
        className="col-8 mt-5 mx-auto border rounded"
      >
        <Label
          className="h3 mt-3 d-flex justify-content-center"
        >To Do</Label>
        
        <Button
          className="btn-success"
          onClick={()=>dispatch({type:ACTIONS.TOGGLE_FORM})}
        >Add New Item
        </Button>
        <hr/>
        <ItemList/>
      </Form>
      <Modal
        isOpen={state.toggleForm}
      >
        <ItemForm/>
      </Modal>
    </div>
  )
}

export default ToDo;