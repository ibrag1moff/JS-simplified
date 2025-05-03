import { createSlice } from "@reduxjs/toolkit";

interface User {
  firebaseId: string;
  // todo
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const {} = userSlice.actions;

export default userSlice.reducer;
