import { useState } from "react";

function TodoItem(props){

    const [isEditing, setisEditing] = useState(false);
    const [todoData, setTodoData] = useState(props.todo.data)

    return (
        <div >
            <li>
                {(isEditing) ? <input type="text" value={todoData} onChange={(e)=> setTodoData(e.target.value)}/> : <span>{props.todo.data}</span>}
            </li>

            <button onClick={()=> {
                setisEditing(!isEditing)
                props.delete()
            }
            }>Done</button>

            <button onClick={()=>{
                setisEditing(!isEditing)
                props.edit(todoData)
            }}>
                {(!isEditing) ? 'Edit' : 'Save'}
            </button>
        </div>
    )
}

export default TodoItem;