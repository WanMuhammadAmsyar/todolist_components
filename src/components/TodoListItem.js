import React from 'react';

const TodoListItem = ({ tasks, status, updateStatus, deleteItem, key}) => {
    return(
        <>
            <li>
                <div>
                    <p>{tasks}</p>
                    <p>{status ? "DONE":"PENDING"}</p>
                    <button onClick={() => updateStatus(key)}>{status ? "UNDONE":"DONE"}</button>
                    <button onClick={() => deleteItem(key)}>DELETE</button>
                </div>
            </li>
        </>
    );
};

export default TodoListItem;