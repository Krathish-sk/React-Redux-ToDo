import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("todosList")
  ? JSON.parse(localStorage.getItem("todosList"))
  : {
      todos: [{ id: "1", text: "Hello" }],
    };

const updateLocalStorage = (data) => {
  localStorage.setItem("todosList", JSON.stringify(data));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isDone: false,
      };
      state.todos = [...state.todos, todo];
      updateLocalStorage(state);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      updateLocalStorage(state);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });

      updateLocalStorage(state);
    },
    markTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
        return todo;
      });
      updateLocalStorage(state);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, markTodo } = todoSlice.actions;
export default todoSlice.reducer;
