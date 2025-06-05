import { useRef } from 'react'
import './CSS/Todo.css'

const Todo = ({ todos, setTodos }) => {
    const inputRef = useRef(null);
    
    const add = () => {
        const text = inputRef.current.value.trim();
        if (text !== "") {
            setTodos([...todos, {
                no: todos.length === 0 ? 1 : todos[todos.length - 1].no + 1,
                text: text,
                display: ""
            }]);
            inputRef.current.value = "";
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            add();
        }
    }

    return (
        <div className="cyberpunk-bg">
            <div className="todo">
                <div className="todo-header">Neon Task Matrix</div>
                <div className="todo-add">
                    <input 
                        ref={inputRef} 
                        type="text" 
                        placeholder='ENTER TASK...' 
                        className='todo-input'
                        onKeyDown={handleKeyPress}
                    />
                    <div onClick={add} className="todo-add-btn">Upload</div>
                </div>
            </div>
        </div>
    )
}

export default Todo