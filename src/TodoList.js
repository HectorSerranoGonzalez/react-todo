import React from "react";

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

function TodoList () {
    return (
        <div>
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
        </div>
      );
}
export default TodoList;