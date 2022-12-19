import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    name: '',
    status: '',
    species: '',
    gender: ''
  },
  reducers: {
    setSearchProperty( store, action ){

      const { property, value } = action.payload;

      return { 
        ...store, 
        [property]: value
      }

    },
  }
})

export const { setSearchProperty } = searchSlice.actions;

export default searchSlice.reducer;