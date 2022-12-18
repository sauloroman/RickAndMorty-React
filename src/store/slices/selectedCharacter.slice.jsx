import { createSlice } from "@reduxjs/toolkit";

export const selectedCharacterSlice = createSlice({
  name: 'selectedCharacter',
  initialState:     
  {
    "id": 265,
    "name": "Pickle Rick",
    "status": "Alive",
    "species": "unknown",
    "type": "Pickle",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/24"
    ],
    "url": "https://rickandmortyapi.com/api/character/265",
    "created": "2017-12-31T13:47:10.617Z"
  },
  reducers: {
    setSelectedCharacter( _store, action ){
      return action.payload
    }
  }
})

export const { setSelectedCharacter } = selectedCharacterSlice.actions;

export default selectedCharacterSlice.reducer;