import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const API_ENDPOINT = 
`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`;

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
/*     new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
          },
        }),
        2000
    )
    ).then((result) => {
    setTodoList(result.data.todoList);
    setIsLoading(false);
    }); */

    fetch(`${API_ENDPOINT}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setTodoList(result.records);
        setIsLoading(false);
      });

  }, []);
console.log("test", todoList);
  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  function addTodo(newTodo){
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
        <h1>Todo List</h1>
          <AddTodoForm onAddTodo={addTodo} />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TodoList onRemoveTodo={removeTodo} todoList={todoList} />
          
          )}
    </>
  );
}

export default App;
