import React from "react";
import TodoListItem from "./TodoListItem";

/* const todoList = [
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
  ]; */

function TodoList({todoList}) {
    return (
          <ul>
              {todoList.map(function(todo){
                return(
                <TodoListItem key={todo.id} todo={todo} />
                )})}
          </ul>
      );
}
export default TodoList;