import React, { useState } from 'react';
import './App.css';
import TodoListItem from './components/TodoListItem';
import InsertTodoList from './components/InsertTodoList'

function App() {
  const [task,setTask]=useState({
    tasks: "",
    status: false
  });
  const [todoList,setTodoList]=useState([])
  const taskHolder = (event) =>{
    setTask({
      tasks: event.currentTarget.value,
      status:false
    })
  };
  const insertTask = () =>{
    setTodoList([...todoList,task])
    setTask({
      tasks: "",
      status: false
    })
  };
  const updateTodoListStatus = (todoListIndex) =>{
    setTodoList(    
      todoList.map((tempTodoListItem,tempTodoListIndex)=>{
      if(todoListIndex===tempTodoListIndex){
        tempTodoListItem.status=!tempTodoListItem.status
      }
      return tempTodoListItem
    }))

  };
  const deleteTodoList = (todoListIndex) =>{
    let tempTodoList=todoList
    tempTodoList.splice(todoListIndex,1)
    setTodoList(    
      tempTodoList.map((tempTodoListItem,tempTodoListIndex)=>{
      return tempTodoListItem
    }))
  }
  return (
    <div className="App">
      <div>
        <div>
          <h1>Your Todo App</h1>
        </div>
        <div>
          <ul>
            <InsertTodoList
              tasks={task.tasks}
              taskHolder={taskHolder}
              insertTask={insertTask}
            />
            {
              todoList.map((todoListItem,todoListIndex)=>(
                <TodoListItem
                  key={todoListIndex}
                  tasks={todoListItem.tasks}
                  status={todoListItem.status}
                  updateStatus={() => updateTodoListStatus(todoListIndex)}
                  deleteItem={() => deleteTodoList(todoListIndex)}
                />
              ))
            }
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;
