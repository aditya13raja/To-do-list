import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../utils/taskSlice';

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
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default TaskEdit;
