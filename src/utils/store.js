import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import inputReducer from './inputSlice';
import { loadState, saveState } from './localStorage';

// Load the state from localStorage if available
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    input: inputReducer,
    tasks: taskReducer,
  },
  preloadedState, // Use the loaded state as the initial state
});

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  saveState({
    input: store.getState().input,
    tasks: store.getState().tasks,
  });
});

export default store;
