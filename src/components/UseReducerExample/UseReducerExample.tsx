import React from 'react';

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ADD-TODOS':
            return {
                todos: [...state.todos, { text: action.text, completed: false }],
                todosCount: state.todosCount + 1
            };
        case 'TOGGLE-TODOS':
            return {
                todos: state.todos.map((t: any, idx: number) => (
                    idx === action.idx ? { ...t, completed: !t.completed } : t
                )),
                todosCount: state.todosCount
            }
        default:
            return state;
    };
};

const UseReducerExample = () => {

    const [count, dispatch,] = React.useReducer(reducer, 0);
    const [{ todos, todosCount }, dispatch2,] = React.useReducer(reducer, { todos: [], todosCount: 0 });
    const [text, setText,]: any = React.useState();

    return (
        <div>
            <h1>Use Reducer Example:</h1>
            <div>Count: {count}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <hr />
            <form onSubmit={e => {
                e.preventDefault();
                dispatch2({ type: 'ADD-TODOS', text })
                setText('')
            }}>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}

                />
                <div>Number of todos: {todosCount}</div>
            </form>
            {
                todos.map((t: any, idx: any) => (
                    <div
                        key={t.text}
                        onClick={() => dispatch2({ type: 'TOGGLE-TODOS', idx })}
                        style={{
                            textDecoration: t.completed ? 'line-through' : ''
                        }}
                    >
                        {t.text}
                    </div>
                ))
            }
        </div>
    )
};

export default UseReducerExample;