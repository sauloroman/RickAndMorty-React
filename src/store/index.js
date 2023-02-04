import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/characters.slice";
import selectedCharacterSlice from "./slices/selectedCharacter.slice";
import paginationSlice from "./slices/pagination.slice";
import searchSlice from "./slices/search.slice";
import locationSlice from "./slices/location.slice";
import episodeSlice from "./slices/episode.slice";
import favoritesSlice from "./slices/favorites.slice";
import themeSlice from "./slices/theme.slice";
import { authSlice } from "./slices/auth";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    characters: charactersSlice,
    selectedCharacter: selectedCharacterSlice,
    pagination: paginationSlice,
    search: searchSlice,
    location: locationSlice,
    episode: episodeSlice,
    favorites: favoritesSlice,
    theme: themeSlice,
  }
})