import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locationNumber: 1,
    information: {}
  },
  reducers: {
    setLocationProperty( store, action ){
      
      const { property, value } = action.payload;

      return {
        ...store,
        [property]: value
      }
    }
  }
})

export const { setLocationProperty } = locationSlice.actions;

export default locationSlice.reducer;