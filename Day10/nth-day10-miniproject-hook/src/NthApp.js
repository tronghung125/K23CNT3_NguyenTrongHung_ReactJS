import React from 'react';
import NthTodoList from './components/NthTodoList';
import NthThemeToggle from './components/NthThemeToggle';
import NthThemeContext from './context/NthThemeContext';

function App() {
    return (
        <NthThemeContext>
            <div>
                <h1>Mini Project: Quản lý công việc (To-Do List) với Hooks trong ReactJS</h1>
                <hr />
                <h1>Quản lý công việc</h1>
                <NthThemeToggle /> {/* Theme toggle button */}
                <NthTodoList /> {/* Todo list */}
            </div>
        </NthThemeContext>
    );
}

export default App;