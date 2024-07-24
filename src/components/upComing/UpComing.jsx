import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask } from '../../store/todosSlice';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdOutlineDone, MdDelete } from 'react-icons/md';

const UpComing = () => {
  const dispatch = useDispatch();
  const { today, tomorrow, thisWeek } = useSelector((state) => state.tasks);

  const [doToday, setDoToday] = useState('');
  const [doTomorrow, setDoTomorrow] = useState('');
  const [doThisWeek, setDoThisWeek] = useState('');

  const handleAdd = (taskType, taskTitle) => {
    if (taskTitle.trim()) {
      dispatch(
        addTask({
          type: taskType,
          task: { id: Date.now(), title: taskTitle, status: false },
        })
      );
      if (taskType === 'today') setDoToday('');
      else if (taskType === 'tomorrow') setDoTomorrow('');
      else if (taskType === 'thisWeek') setDoThisWeek('');
    }
  };

  const handleToggle = (taskType, taskId) => {
    dispatch(toggleTask({ type: taskType, taskId }));
  };

  const renderTaskList = (tasks, taskType, inputVal, setInputVal) => (
    <div className="mainBoxes">
      <h2>{taskType.charAt(0).toUpperCase() + taskType.slice(1)}</h2>
      <div className="texter">
        <button className="Btn" onClick={() => handleAdd(taskType, inputVal)}>
          <IoMdAddCircleOutline className="icon" />
        </button>
        <input
          type="text"
          placeholder="Add new task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <ul className="addedTasksBox">
        {tasks.map((task) => (
          <li key={task.id} className="addedTasks">
            <input
              type="checkbox"
              className="s"
              checked={task.status}
              onChange={() => handleToggle(taskType, task.id)}
            />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="todayBox">
        <h2>Upcoming</h2>
      {renderTaskList(today, 'today', doToday, setDoToday)}
      <div className='flex'>
        {renderTaskList(tomorrow, 'tomorrow', doTomorrow, setDoTomorrow)}
        {renderTaskList(thisWeek, 'thisWeek', doThisWeek, setDoThisWeek)}
      </div>
    </div>
  );
};

export default UpComing;
