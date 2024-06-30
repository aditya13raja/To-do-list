import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../utils/taskSlice';
import "../App.scss"

const TaskEdit = ({ task, onCancel }) => {
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (text.trim()) {
      dispatch(editTask({ id: task.id, text }));
      onCancel();
    }
  };

  return (
    <div className='taskEdit'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className='buttons'>
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Ca</button>
      </div>
    </div>
  );
};

export default TaskEdit;
