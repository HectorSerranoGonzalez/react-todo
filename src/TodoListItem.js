import React from "react";

function TodoListItem({todo}) {
    return  (
        <li>
            {/* <span>{item.id}</span> */}
            <span>{todo.title}</span>
        </li>
    );

}

export default TodoListItem;
