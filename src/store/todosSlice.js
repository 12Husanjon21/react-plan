import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  today: [],
  tomorrow: [],
  thisWeek: [],
};

const todosSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { type, task } = action.payload;
      state[type].push(task);
    },
    toggleTask: (state, action) => {
      const { type, taskId } = action.payload;
      const task = state[type].find((task) => task.id === taskId);
      if (task) {
        task.status = !task.status;
      }
    },
  },
});

export const { addTask, toggleTask } = todosSlice.actions;
export default todosSlice.reducer;
