import { createSlice } from "@reduxjs/toolkit";

export const locationsSlice = createSlice({
  name: 'locations',
  initialState: [],
  reducers: {
    setLocations( _store, action ){
      return action.payload
    }
  }
})

export const { setLocations } = locationsSlice.actions;

export default locationsSlice.reducer;