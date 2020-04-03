import React, {useState, useReducer} from 'react'

function reducer(state, action) {
    switch(action.type) {
        case 'increment': 
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'add-todo':
            return {
                todos: [...state.todos, {text: action.text, completed: false}],
                todoCount: state.todoCount + 1
            };
        case 'toggle-todo':
            return {
                todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t),
                todoCount: state.todoCount
            };
        default : return state;
    }
}

const App1 = () => {

    const [{todos, todoCount}, dispatch] = useReducer(reducer, {todos: [], todoCount: 0})
    const [text, setText] = useState();

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({type: 'add-todo', text});
                setText("");
            }}>
            {/* <div>Count: {count}</div>
            <button onClick={() => dispatch({type: 'increment'})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>decrement</button> */}
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            </form>
            <div>number of todos: {todoCount}</div>
            {/* <pre>
                {JSON.stringify(todos, null, 2)}
            </pre> */}
            {todos.map((t, idx) => (
                <div 
                style={{textDecoration: t.completed ? 'line-through': ''}}
                key={t.text} 
                onClick={() => dispatch({type: 'toggle-todo', idx})}>
                    {t.text}
                </div>
            ))}
        </div>
    )
}

export default App1
