import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const store = configureStore({
  reducer: {
    tasks: todosReducer,
  },
});

export default store;
