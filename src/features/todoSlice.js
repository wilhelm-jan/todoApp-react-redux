import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    markDone: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },

    removeTodo: (state, action) => {
      return {
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { addTodo, markDone, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
