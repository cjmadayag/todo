import React from "react"
import {Table,Button} from "reactstrap"
import {useContext} from "../contextProvider"
import * as actions from "../actions";

const ToDoList = ()=>{
  const [state,dispatch] = useContext();

  const headerStyle = { width:"33%", textAlign:"center" }

  return(
    <Table
      borderless
      size="sm"
    >
      <thead>
        <tr>
          <th
            style={headerStyle}
          >Task</th>
          <th
            style={headerStyle}
          >Status</th>
          <th
            style={headerStyle}
          >Action</th>
        </tr>
      </thead>
      <tbody>
        {state.list.map(task=>(
          <tr
            key={task.id}
          >
            <td className="text-center">{task.item}</td>
            <td className="text-center">
                {task.isDone?"Completed":"Incomplete"}
            </td>
            <td
              className="d-flex justify-content-center"
            >
              <Button
                size="sm"
                color="warning"
                className="mx-1"
                onClick={()=>dispatch(actions.toggleEditForm(task))}
              >Edit
              </Button>
              <Button
                size="sm"
                color="info"
                className="mx-1"
                onClick={()=>dispatch(actions.completeTask(task.id))}
              >Done
              </Button>
              <Button
                size="sm"
                color="danger"
                className="mx-1"
                onClick={()=>dispatch(actions.deleteItem(task.id))}
              >Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ToDoList;