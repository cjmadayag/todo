import React from "react";
import {useContext} from "../contextProvider";
import * as actions from "../actions";
import {Container,Form,Label,Button,Modal} from "reactstrap";
import {ToDoForm,ToDoRow} from "../components";

const ToDo = ()=>{
  const [state,dispatch] = useContext();
    
  return(
    <Container>
      <Form
        className="col-8 mt-5 mx-auto border rounded"
      >
        <Label
          className="h3 mt-3 d-flex justify-content-center"
        >To Do</Label>
        <Button
          className="btn-success"
          onClick={()=>dispatch(actions.toggleForm())}
        >Add New Task
        </Button>
        <hr/>
        <ToDoRow/>
      </Form>
      <Modal
        isOpen={state.toggleForm}
      >
        <ToDoForm/>
      </Modal>
    </Container>
  )
}

export default ToDo;