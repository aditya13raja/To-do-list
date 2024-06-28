import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import inputReducer from './inputSlice';

const store = configureStore({
  reducer: {
    input: inputReducer,
    tasks: taskReducer,
  },
});

export default store;
