export default function NthTodoItem({todo , dispatch}){
    return (
        <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <span onClick={()=> dispatch({type: "TOGGLE_TODO" ,payload: todo.id
            })}>
                {todo.text}
            </span>
            <button
                onClick={() => dispatch({type: "DELETE_TODO" , payload: todo.id })}>
                    X
                </button>
        </li>
    );
}