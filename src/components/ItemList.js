import React from "react"
import {Table,Button} from "reactstrap"

const ItemTable = ({list,setItemFormIsOpen,setIsEditing,setItemToEdit,doneButtonOnClick,deleteButtonOnClick})=>{

  const editButtonOnClick = (item)=>{
    setItemFormIsOpen(true)
    setIsEditing(true)
    setItemToEdit(item)
  }

  return(
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item)=>(
          <tr
            key={item.id}
          >
            <td>{item.item}</td>
            <td>
                {item.isDone?"Done":"Pending"}
            </td>
            <td>
              <Button
                className="mx-1 btn-warning"
                onClick={()=>editButtonOnClick(item)}
              >
                Edit
              </Button>
              <Button
                className="mx-1 btn-info"
                onClick={()=>doneButtonOnClick(item.id)}
              >
                Done
              </Button>
              <Button
                className="mx-1 btn-danger"
                onClick={()=>deleteButtonOnClick(item.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ItemTable;