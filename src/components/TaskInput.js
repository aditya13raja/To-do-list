import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../utils/taskSlice';
import { updateInput } from '../utils/inputSlice';

const TaskInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.value);

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      dispatch(updateInput(''));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => dispatch(updateInput(e.target.value))}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
