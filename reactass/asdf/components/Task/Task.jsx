import React, { useState } from "react";
import styles from "./task.module.css";

const Task = (props) => {
  const { title, id, handleDelete } = props;
  // NOTE: do not delete `data-cy` key value pair
  let [count, setcount] = useState(0);

  const handleClick = () => {
    setcount(count + 1);
  };
  const handledecrement = () => {
    if (count == 0) {
      setcount(count);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <>
      <li data-cy="task" className={styles.task}>
        <input type="checkbox" data-cy="task-checkbox" />
        <h3>{title}</h3>
        <div data-cy="task-text"></div>

        <div style={{ display: "flex" }}>
          <button onClick={handledecrement}>-</button>
          <p>{count}</p>
          <button onClick={handleClick}>+</button>
        </div>
        {/* Counter here */}
        <button data-cy="task-remove-button" onClick={() => handleDelete(id)}>
          X
        </button>
      </li>
    </>
  );
};

export default Task;
