import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  searchTerm: string,
  filterBy: string
}

const initialState = {
  searchTerm: '',
  filterBy: ''
} as SearchState;

const searchSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setFilterBy: (state, action) => {
      state.filterBy = action.payload
    },
  },
});

export const { setSearchTerm, setFilterBy } =
  searchSlice.actions;
export default searchSlice.reducer;
