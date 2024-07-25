import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settings: null,
    results: null,
    socials: null,
    theme: "light",
  },
  reducers: {
    setSettingsInfo: (state, action) => {
      state.settings = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setSocials: (state, action) => {
      state.socials = action.payload;
    },
    changeTheme: (state, action) => {
      if (state.theme == "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
    },
    defineTheme: (state, action) => {
      const localTheme =
        typeof window !== "undefined" ? localStorage.getItem("theme") : "light";
      state.theme = localTheme ? localTheme : "light";
    },
  },
});

export const { setSettingsInfo, setResults, setSocials, changeTheme , defineTheme } =
  settingsSlice.actions;

export default settingsSlice.reducer;
