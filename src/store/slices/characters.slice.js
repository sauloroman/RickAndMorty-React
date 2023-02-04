import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: [],
  reducers: {
    setCharacters( _store, action ){
      return action.payload
    }
  }
})

export const { setCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;