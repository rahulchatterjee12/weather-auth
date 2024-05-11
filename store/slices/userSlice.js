import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    },
    clearUser: (state) => {
      state.userId = null;
      state.userName = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
