import React from "react";
import InputWithLabel from "./InputWithLabel";


function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = React.useState("");
        function handleTitleChange(event) {
            let newTodoTitle = event.target.value; //Retrives the value of title element from target and stores it in todoTitle
            setTodoTitle(newTodoTitle);
        };

        function handleAddTodo(event) {
            event.preventDefault();
                if (todoTitle === "") {
                    alert ("Empty Form");
                    return;
                } else {
                    onAddTodo({title: todoTitle, id: Date.now()});
                    console.log(todoTitle);
                    setTodoTitle('');
                }
                // console.log(todoTitle.id);
                // onAddTodo({title: todoTitle, id: Date.now()});
                // setTodoTitle('');
};

    return (
        <form onSubmit={handleAddTodo}>
{/*             <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title" type="text" value={todoTitle} onChange={handleTitleChange}></input>
            <button type="submit">Add</button> */}
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                children
            >
            <strong>Title: </strong>
            </InputWithLabel>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;