import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/characters.slice";
import selectedCharacterSlice from "./slices/selectedCharacter.slice";
import paginationSlice from "./slices/pagination.slice";
import searchSlice from "./slices/search.slice";
import locationSlice from "./slices/location.slice";

export default configureStore({
  reducer: {
    characters: charactersSlice,
    selectedCharacter: selectedCharacterSlice,
    pagination: paginationSlice,
    search: searchSlice,
    location: locationSlice
  }
})