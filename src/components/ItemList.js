import React from "react"
import {Table,Button} from "reactstrap"
import {useContext, ACTIONS} from "../Context"

const ItemTable = ()=>{
  const [state,dispatch] = useContext();

  return(
    <Table
      borderless
      size="sm"
    >
      <thead>
        <tr>
          <th
            className="text-center"
            style={{width:"33%"}}
          >Item</th>
          <th
            className="text-center"
            style={{width:"33%"}}
          >Status</th>
          <th
            className="text-center"
            style={{width:"33%"}}
          >Action</th>
        </tr>
      </thead>
      <tbody>
        {state.list.map(item=>(
          <tr
            key={item.id}
          >
            <td className="text-center">{item.item}</td>
            <td className="text-center">
                {item.isDone?"Complete":"Incomplete"}
            </td>
            <td
              className="d-flex justify-content-center"
            >
              <Button
                size="sm"
                color="warning"
                className="mx-1"
                onClick={()=>dispatch({type:ACTIONS.TOGGLE_EDIT_FORM,payload:item})}
              >Edit
              </Button>
              <Button
                size="sm"
                color="info"
                className="mx-1"
                onClick={()=>dispatch({type:ACTIONS.COMPLETE_TASK,payload:{id:item.id}})}
              >Done
              </Button>
              <Button
                size="sm"
                color="danger"
                className="mx-1"
                onClick={()=>dispatch({type:ACTIONS.DELETE_ITEM,payload:{id:item.id}})}
              >Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ItemTable;