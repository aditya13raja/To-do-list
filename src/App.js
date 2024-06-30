import React from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
