import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Test 1",
    content: "hello toolkit",
  },
  {
    id: 2,
    title: "Test 2",
    content: "hello redux",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  // reducers: {},
});

export default postsSlice.reducer;
