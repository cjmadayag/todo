import React, {useState} from 'react';
import {Form,Label,Button,Modal,Input} from "reactstrap";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const App = ()=>{
  const [list, setList] = useState([]);
  const [itemCount,setItemCount] = useState(0)
  const [itemFormIsOpen, setItemFormIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [itemToEdit,setItemToEdit] = useState({})

  const AddItemOnList = (item)=>{
    const oldList = [...list]

    if(isEditing){
      const newList = oldList.filter((indivItem)=>{
        if(indivItem.id===itemToEdit.id){
          indivItem.item = item
          return indivItem
        }
      })
      setIsEditing(false)
      setItemToEdit({})
      setList(newList)
    }else{
      setList([...oldList,{id:itemCount,item,isDone:false}])
      setItemCount(itemCount+1);
    }
  }

  const doneButtonOnClick = (id)=>{
    const oldList = [...list];
    const newList = oldList.filter((indivItem)=>{
      if(indivItem.id===id){
        indivItem.isDone = true
        return indivItem
      }
    })
    setList(newList)
  }

  const deleteButtonOnClick = (id)=>{
    const oldList=list;
    const newList = oldList.filter(item=>(item.id!=id))
    setList(newList);
  }

  return (
    <div className="container">
      <Form
        className="col-6 mt-5 mx-auto border rounded"
      >
        <Label
          className="h3 mt-3 d-flex justify-content-center"
        >To Do</Label>
        <hr/>
        <Button
          className="btn-success"
          onClick={()=>setItemFormIsOpen(true)}
        >
          Add New Item
        </Button>
        <ItemList
          list={list}
          setItemFormIsOpen={setItemFormIsOpen}
          setIsEditing={setIsEditing}
          setItemToEdit={setItemToEdit}
          doneButtonOnClick={doneButtonOnClick}
          deleteButtonOnClick={deleteButtonOnClick}
        />
      </Form>
      <Modal
        isOpen={itemFormIsOpen}
      >
        <ItemForm
          setItemFormIsOpen={setItemFormIsOpen}
          AddItemOnList={AddItemOnList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          itemToEdit={itemToEdit}
          setItemToEdit={setItemToEdit}
        />
      </Modal>
    </div>
  );
}

export default App;
