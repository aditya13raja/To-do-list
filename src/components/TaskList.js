import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleTask } from '../utils/taskSlice';
import TaskEdit from './TaskEdit';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  // Sort tasks to ensure completed tasks are at the end
  const sortedTasks = tasks.slice().sort((a, b) => a.completed - b.completed);

  return (
    <div>
      <ul>
        {sortedTasks.map((task) => (
          <li key={task.id}>
            {editingTaskId === task.id ? (
              <TaskEdit task={task} onCancel={handleCancelEdit} />
            ) : (
              <>
                <span
                  onClick={() => dispatch(toggleTask(task.id))}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                >
                  {task.text}
                </span>
                <button onClick={() => handleEdit(task.id)}>Edit</button>
                <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
