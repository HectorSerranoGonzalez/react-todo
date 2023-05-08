import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

let useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);

React.useEffect(() => {
  localStorage.setItem('savedTodoList', JSON.stringify(todoList));
}, [todoList]);
return (
  [todoList, setTodoList] );
};




function App() {
/*   const [newTodo, setNewTodo] = React.useState(''); */
     const [todoList, setTodoList] = useSemiPersistentState("");

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
          <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>
    </>
  );
}

export default App;
