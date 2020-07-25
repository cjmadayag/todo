import React,{useState} from "react";
import {Form,Label,Input,Button} from "reactstrap";

const ItemForm = ({setItemFormIsOpen,AddItemOnList,isEditing,setIsEditing,itemToEdit,setItemToEdit})=>{

  const [itemName,setItemName] = useState("")

  const addButtonOnClick = ()=>{
    AddItemOnList(itemName)
    setItemFormIsOpen(false)
    setItemName("")
  }

  const closeButtonOnClick = ()=>{
    setItemFormIsOpen(false)
    setIsEditing(false)
    setItemToEdit({})
  }

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
        onChange={(e)=>setItemName(e.target.value)}
        defaultValue={isEditing?itemToEdit.item:""}
      />
      <div
        className="mx-auto mt-3"
      >
        <Button
          className="mr-1 btn-success"
          onClick={addButtonOnClick}
        >{isEditing?"Edit":"Add"}</Button>
        <Button
          className="ml-1 btn-danger"
          onClick={closeButtonOnClick}
        >
          Close
        </Button>
      </div>
    </Form>
  )
}

export default ItemForm;