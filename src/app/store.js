import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer/todoSlice.js";

export const store = configureStore({
  reducer: {
    todosReducer,
  },
});
