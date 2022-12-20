import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: JSON.parse( localStorage.getItem('favorites')) || [],
  reducers: {
    addFavorite: ( store, action ) => {
      return [...store, action.payload];
    },
    
    deleteFavorite: ( store, action ) => {
      return store.filter( favorite => favorite.id !== action.payload );
    },

    setFavorites: ( _store, action ) => {
      return action.payload;
    }
  }
})

export const { addFavorite, deleteFavorite, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;