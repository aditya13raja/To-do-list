import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../utils/taskSlice';
import { updateInput } from '../utils/inputSlice';
import addButton from "../assets/circle-plus-solid.svg"


// Component to provide component and functionality to add task
const TaskInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.value);

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      dispatch(updateInput(''));
    }
  };

  // Enabling to create new task after 'enter' keypress
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='taskInput'>
      <input
        type="text"
        placeholder='Add Task'
        value={input}
        onChange={(e) => dispatch(updateInput(e.target.value))}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>
        <img src={addButton} alt='Add' style={{width: '2rem'}}/>
      </button>
      
    </div>
  );
};

export default TaskInput;
