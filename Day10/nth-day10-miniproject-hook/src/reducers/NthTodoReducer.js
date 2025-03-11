// Reducer function to handle the state changes for the Todo list
export default function NthTodoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            // Adds a new todo to the state
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false },
            ];
        
        case "TOGGLE_TODO":
            // Toggles the 'completed' status of a specific todo
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        
        case "DELETE_TODO":
            // Deletes a specific todo by its id
            return state.filter((todo) => todo.id !== action.payload);
        
        default:
            // If no action matches, return the current state unchanged
            return state;
    }
}