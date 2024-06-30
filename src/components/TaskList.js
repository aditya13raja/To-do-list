import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, toggleTask } from '../utils/taskSlice';
import TaskEdit from './TaskEdit';

// Import images for button
import editTask from '../assets/pen-solid.svg';
import deleteTask from '../assets/trash-solid.svg';

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
    <div className='taskList'>
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
                <div className='buttons'>
                  <button onClick={() => handleEdit(task.id)}>
                    <img src={editTask} alt='Edit' />
                  </button>
                  <button onClick={() => dispatch(removeTask(task.id))}>
                    <img src={deleteTask} alt='Delete' />
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
