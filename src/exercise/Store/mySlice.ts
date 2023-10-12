import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalNameState {
  name: string;
}

const initialState: AnimalNameState = { name: "" };
const AniamlSlice = createSlice({
  name: "animalName",
  initialState: initialState,
  reducers: {
    editName(state: AnimalNameState, action: PayloadAction<string>) {
      state.name = action.payload;
      return state;
    },
  },
});
export const { editName } = AniamlSlice.actions;
export default AniamlSlice.reducer;
