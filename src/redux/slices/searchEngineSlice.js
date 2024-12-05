import { createSlice } from "@reduxjs/toolkit";
import { searchByEngine } from "../../services/blogServices";

// Set the initial state
export const initialState = {
  Search: [],
  searchStatus: "",
  searchIsLoading: false,
  searchError: null,
  searchIsSuccessfull: false,
};

const searchEngineSlice = createSlice({
  name: "searchByEngineSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchByEngine.pending, (state) => ({
        ...state,
        SearchIsLoading: true,
      }))
      .addCase(searchByEngine.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          Search: action.payload.articles,
          searchStatus: action.payload.status,
          SearchIsLoading: false,
          SearchIsSuccessfull: true,
        };
        console.log(returnData);
        return returnData;
      })
      .addCase(searchByEngine.rejected, (state, action) => ({
        ...state,
        SearchError: action.payload,
        SearchIsLoading: false,
        SearchIsSuccessfull: false,
      }));
  },
});

export default searchEngineSlice.reducer;
