import React from 'react';


const InsertTodoList = ({tasks,taskHolder,insertTask}) =>{
    return(
        <>
            <li>
                <div>
                    <input value={tasks} onChange={taskHolder}/>
                    <button onClick={insertTask}>ADD</button>
                </div>
            </li>
        </>
    );
};

export default InsertTodoList;