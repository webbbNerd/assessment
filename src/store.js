import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  // formdata: null,
  overview: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "setFormData":
    //   return {
    //     ...state,
    //     formdata: action.payload,
    //   };
    case "selectedOverview":
      return {
        ...state,
        overview: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
