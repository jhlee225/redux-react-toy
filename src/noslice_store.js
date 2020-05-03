import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer";
//ADJUST CREATESLICE ------------------------------------------

const countStore = configureStore({
  reducer: counter,
});

//------------------------------------------------------------
export default countStore;
