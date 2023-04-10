import React from "react";
import TodoListItem from "./TodoListItem";

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
          <ul>
              {todoList.map(function(todo) {
                  return (
                    // console.log('HI')
                    <TodoListItem key={todo.id} todo={todo} />
                    // <li key={item.id}>
                    //   <span>{item.id}</span>
                    //   <span>{item.title}</span>
                    // </li>
                  )
                })}
          </ul>
      );
}
export default TodoList;