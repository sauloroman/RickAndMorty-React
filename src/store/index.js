import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./slices/characters.slice";
import selectedCharacterSlice from "./slices/selectedCharacter.slice";
import paginationSlice from "./slices/pagination.slice";
import locationsSlice from "./slices/locations.slice";
import searchSlice from "./slices/search.slice";

export default configureStore({
  reducer: {
    characters: charactersSlice,
    selectedCharacter: selectedCharacterSlice,
    pagination: paginationSlice,
    locations: locationsSlice,
    search: searchSlice
  }
})