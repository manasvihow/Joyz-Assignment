import Todo from "../Componenets/Todo"
import TodoItems from "../Componenets/TodoItems"
import { useState } from "react"

const App = () => {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="cyberpunk-bg">
        <Todo todos={todos} setTodos={setTodos} />
        <TodoItems todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App