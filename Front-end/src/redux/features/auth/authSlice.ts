import { createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
  _id: string;
  fullName: string;
  email: string;
  role: "admin" | "user";
}

export interface AuthState {
  userInfo: UserInfo | null;
}

// Safely parse userInfo from localStorage
const storedUserInfo = localStorage.getItem("userInfo");
const parsedUserInfo: UserInfo | null = storedUserInfo
  ? JSON.parse(storedUserInfo)
  : null;

// Debug initial state
console.log("Initial userInfo from localStorage:", parsedUserInfo);

const initialState: AuthState = {
  userInfo: parsedUserInfo,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log("Setting credentials:", action.payload); // Debug payload
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      const expirationTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 7; // 7 days
      localStorage.setItem("expirationTime", expirationTime.toString());
    },
    logout: (state) => {
      console.log("Logging out, clearing userInfo");
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;