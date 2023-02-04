import { createSlice } from "@reduxjs/toolkit";

export const episodeSlice = createSlice({
  name: 'episode',
  initialState: {
    episodeNumber: 1,
    information: {}
  },
  reducers: {
    setEpisodeProperty( store, action ){
      
      const { property, value } = action.payload;

      return {
        ...store,
        [property]: value
      }
    }
  }
})

export const { setEpisodeProperty } = episodeSlice.actions;

export default episodeSlice.reducer;