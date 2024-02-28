import { useState } from "react";
import TodoItem from "./TodoItem";
import './Todo.css';

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function deleteTodo(id){
    let remainingTodo = todoItems.filter((todo)=> todo.id!= id );
    setTodoItems(remainingTodo);
  }

  function editTodo(id , newTodo){
    let updatedTodos = todoItems.map((todo)=>{
        if(todo.id == id){
            todo.data = newTodo;
        }
        return todo;
    })
    setTodoItems(updatedTodos);

  }

  return (
    <div className="todo">
    
    <h1>Welcome to the Todo App</h1>
      <input
        type="text"
        placeholder="Write any todo.."
        onChange={(event) => setTodoText(event.target.value)}
        value={todoText}
      />

      <button
        onClick={() => {
          setTodoItems([...todoItems,{ data: todoText, id: new Date().getTime() }]);
          setTodoText("");
        }}
      >
        Submit
      </button>

      <ul>
        {todoItems.map((todo) => <TodoItem 
                                    todo={todo}
                                    key={todo.id}
                                    delete={()=> deleteTodo(todo.id)}
                                    edit = {(newTodo)=>editTodo(todo.id,newTodo)}
                                    />)
        }
      </ul>
    </div>
  );
}

export default Todo;
