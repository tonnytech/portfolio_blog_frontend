import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../services/userServices";
import { getLocalStorage, setLocalStorage } from "../../sideCode/side";

// Set the initial state
const initialState = {
  user: getLocalStorage("userData"),
  Admin: getLocalStorage("isAdmin") ? getLocalStorage("isAdmin") : false,
  userIsLoading: false,
  userError: null,
  userIsSuccessfull: false,
};

const getUserSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {
    setAdmin: (state) => {
      state.Admin = true;
      setLocalStorage("isAdmin", true);
    },
    resetAdmin: (state) => {
      state.Admin = true;
      setLocalStorage("isAdmin", false);
    },
    logoutUser: (state) => {
      state.user = "";
      setLocalStorage("userData", "");
      setLocalStorage("isAdmin", "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => ({
        ...state,
        userIsLoading: true,
      }))
      .addCase(loginUser.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          user: action.payload.data.user,
          userIsLoading: false,
          userIsSuccessfull: true,
        };
        setLocalStorage("userData", returnData.user);
        return returnData;
      })
      .addCase(loginUser.rejected, (state, action) => ({
        ...state,
        userError: action.payload,
        userIsLoading: false,
        userIsSuccessfull: false,
      }));
  },
});

export const { setAdmin, logoutUser, resetAdmin } = getUserSlice.actions;
export default getUserSlice.reducer;
