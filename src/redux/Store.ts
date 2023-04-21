import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "./Reducers";
const store = configureStore({
  reducer: TimerReducer,
});
export default store;
