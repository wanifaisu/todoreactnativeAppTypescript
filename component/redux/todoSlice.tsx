import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: [{ id: 1, title: "add item to list", check: false }],
  reducers: {
    addItem: (state, action: PayloadAction<Todo>) => {
      const newItem = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
      };
      state.push(newItem);
    },

    //Remove item
    removeItem: (state, action: PayloadAction<Todo>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    //Toggle check
    toggleCheck: (state, action: PayloadAction<Todo>) => {
      const indexItem = state.find((item) => item.id === action.payload.id);

      state.splice(state.indexOf(indexItem), 1);
      state.push(indexItem);
    },

    //clear all item in list
    clearList: (state) => {
      return [];
    },
  },
});

export const { addItem, removeItem, toggleCheck, clearList } =
  todoSlice.actions;

export default todoSlice.reducer;
