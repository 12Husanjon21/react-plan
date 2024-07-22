import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineDone, MdDelete } from "react-icons/md";

export default function Today() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue(''); 
    }
  };

  const markAsDone = (task) => {
    setDoneTasks([...doneTasks, task]);
    setTasks(tasks.filter(t => t !== task)); // Bajarilgan vazifani olib tashlash
  };

  const deleteDoneTask = (task) => {
    setDoneTasks(doneTasks.filter(t => t !== task)); // Bajarilgan vazifani olib tashlash
  };

  return (
    <div className="today">
      <h2>Today</h2>
      <div className="mainBox">
        <h2>Today</h2>
        <div className="texter">
          <button className="Btn" onClick={addTask}>
            <IoMdAddCircleOutline className="icon"/>
          </button>
          <input 
            type="text" 
            placeholder="Add new task" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <ul className="addedTasksBox">
          <h3>Added Tasks:</h3>
          {tasks.map((task, index) => (
            <li className="addedTasks" key={index}>
              {task}
              <button className="Btn" onClick={() => markAsDone(task)}>
                <MdOutlineDone className="icon"/>
              </button>
            </li>
          ))}
        </ul>
        <ul className="doneTasksBox">
          <h3>Done Tasks:</h3>
          {doneTasks.map((task, index) => (
            <li className="doneTasks" key={index}>
              {task}
              <button className="Btn" onClick={() => deleteDoneTask(task)}>
                <MdDelete className="icon"/>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
