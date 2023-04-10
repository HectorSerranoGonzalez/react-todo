import React from "react";

function AddTodoForm(props) {
    const [inputText, setInputText] = React.useState("");
        function handleAddTodo(event) {
            event.preventDefault(); //Prevents default behavior of the form submit
            let todoTitle = inputText; //Retrives the value of title element from target and stores it in todoTitle
            console.log(todoTitle); //Logs the value of todoTitle
            setInputText(''); //Resets Form
            props.onAddTodo(todoTitle);
   }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="title"></input>
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;