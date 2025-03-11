import React, { useEffect, useReducer } from 'react';
import NthTodoReducer from '../reducers/NthTodoReducer'; // Corrected import
import NthAddTodo from './NthAddTodo';
import NthTodoItem from './NthTodoItem';

export default function NthTodoList() {
    const [todos, dispatch] = useReducer(NthTodoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <NthAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <NthTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}