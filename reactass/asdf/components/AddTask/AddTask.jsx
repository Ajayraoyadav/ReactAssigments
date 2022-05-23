import React,{useState} from "react";
import styles from "./addTask.module.css";
import { nanoid } from "nanoid";
import Tasks from "../Tasks/Tasks";
import Task from "../Task/Task";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask] = useState("");
  const [Todo, setTodo] = useState([])
  const handleChange = (e)=>{
      setTask(e.target.value)
  }
  const handleClick = ()=>{
      const taskObj={
          title:task,
          status:false,
          id:nanoid()
      }
      setTodo([taskObj,...Todo])
  }

  const handleDelete = (id)=>{
    let newTodo = Todo.filter((item)=>item.id !=id);
    setTodo(newTodo);
 }

 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task" onChange={handleChange} />
      <button data-cy="add-task-button" onClick={handleClick} >+</button>
      {Todo.map(item=>{
            return <Task  key={item.id} {...item} handleDelete={handleDelete}/>

        })}
    </div>
  );
};

export default AddTask;
