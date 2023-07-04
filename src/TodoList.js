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

function TodoList({todoList, onRemoveTodo}) {
    return (
          <ul>
              {todoList.map(function(todo){
                return(
                  <TodoListItem 
                    onRemoveTodo={onRemoveTodo}
                    key={todo.id}
                    id={todo.id}
                    title={todo.fields.title} 
                  />
                );
                })}
          </ul>
      );
};
export default TodoList;