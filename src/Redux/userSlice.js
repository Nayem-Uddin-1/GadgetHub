import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("user")) || null, // load from localStorage
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));  
    },
    clearUser: (state) => {
      state.users = null;
      localStorage.removeItem("user");  
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
