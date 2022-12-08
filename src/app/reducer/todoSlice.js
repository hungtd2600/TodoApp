import { createSlice } from "@reduxjs/toolkit";

// Reducer Thunk

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
  },
  reducers: {},
  extraReducers: {},
});

// Reducer
const todosReducer = todosSlice.reducer;

// Selector
export const todosSelector = (state) => state.todosReducer.allTodos;

// Action export
// export const {} = todosSlice.actions;

// Export reducer
export default todosReducer;
