import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    settings: null,
    results: null,
    socials: null,
    theme: "light",
    offcanvas: false,
    registerModal: false,
    services: null,
    individual_services: [],
    individual_total: 0,
    questionModal: false,
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
    toggleOffcanvas: (state, action) => {
      state.offcanvas = !state.offcanvas;
    },
    toggleRegisterModal: (state, action) => {
      state.registerModal = !state.registerModal;
    },
    toggleQuestionModal: (state, action) => {
      state.questionModal = !state.questionModal;
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setIndividualServices: (state, action) => {
      const service = action.payload;
      if (state.individual_services.some((item) => item.id === service.id)) {
        state.individual_services = state.individual_services.filter(
          (item) => item.id !== service.id
        );
      } else {
        state.individual_services.push(service);
      }
      state.individual_total = state.individual_services.reduce(
        (total, item) => total + item.price,
        0
      );
    },
  },
});

export const {
  setSettingsInfo,
  setResults,
  setSocials,
  changeTheme,
  defineTheme,
  toggleOffcanvas,
  toggleRegisterModal,
  setServices,
  setIndividualServices,
  toggleQuestionModal,
} = settingsSlice.actions;

export default settingsSlice.reducer;
