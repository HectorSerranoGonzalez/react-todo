import React from 'react';
const todoList = [
  {
    id: 1,
    title: " Complete Assignment",
   },
   {
     id: 2,
     title: " Read",
   },
   {
     id: 3,
     title: " Be active",
   },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Todo List</h1>
          <ul>
            {todoList.map(function(item) {
              return (
                <li key={item.id}>
                  <span>{item.id}</span>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
      </header>
    </div>
  );
}

export default App;
