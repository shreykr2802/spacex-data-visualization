import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string
}

const initialState = {
  searchTerm: ''
} as SearchState;

const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
});

export const { setSearchTerm } =
  searchSlice.actions;
export default searchSlice.reducer;
