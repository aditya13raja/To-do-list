import { createSlice } from '@reduxjs/toolkit';

// Slice to store all tasks
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },

  // Operations provided for the tasks list
  reducers: {

    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    clearTasks: (state) => {
      state.items = [];
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.items.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
    },
  }
});


export const { addTask, removeTask, toggleTask, clearTasks, editTask } = taskSlice.actions;
export default taskSlice.reducer;