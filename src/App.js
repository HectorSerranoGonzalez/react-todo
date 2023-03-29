import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
