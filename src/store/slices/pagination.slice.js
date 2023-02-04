import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {},
  reducers: {
    setPagination( _store, action ){
      return action.payload
    }
  }
})

export const { setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;