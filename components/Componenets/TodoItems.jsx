import './CSS/TodoItems.css'

const TodoItems = ({ todos, setTodos }) => {
    const deleteTodo = (no) => {
        setTodos(todos.filter((todo) => todo.no !== no));
    }

    return (
        <div className="todo">
            <div className="todo-list">
                {todos.length === 0 ? (
                    <div className="empty-state">System Ready. Awaiting Tasks...</div>
                ) : (
                    todos.map((todo) => (
                        <div key={todo.no} className="todo-item">
                            <div className="todo-text">{'>>'} {todo.text}</div>
                            <div className="todo-actions">
                                <button onClick={() => deleteTodo(todo.no)}>Terminate</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default TodoItems