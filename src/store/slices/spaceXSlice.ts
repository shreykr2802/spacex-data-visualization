import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SpaceXDataState {
  data: any[];
  error: string;
  loading: boolean;
}

const initialState = {
  data: [],
  error: "",
  loading: false,
} as SpaceXDataState;

const spaceXSlice = createSlice({
  name: "spaceXData",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.error = "";
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<any>) => {
      state.error = "";
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailed } =
  spaceXSlice.actions;
export default spaceXSlice.reducer;
