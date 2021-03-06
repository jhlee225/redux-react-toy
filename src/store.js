import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    date: Date(),
    milliSec: 99,
    Sec: 0,
    Minute: 0,
    Weather: null,
  },
  reducers: {
    addNumber: (state, action) =>
      (state = {
        ...state,
        Minute: action.payload.number + action.payload.plus,
      }),
    minusNumber: (state, action) =>
      (state = {
        ...state,
        Minute: action.payload.number - action.payload.minus,
      }),
    timeFlow: (state, action) =>
      (state =
        action.payload.milliSec <= 0 &&
        action.payload.Sec <= 0 &&
        action.payload.Minute <= 0
          ? state
          : {
              date: Date(),
              milliSec:
                action.payload.milliSec <= 0
                  ? action.payload.Sec <= 0
                    ? action.payload.Minute <= 0
                      ? 0
                      : 99
                    : 99
                  : action.payload.milliSec - 1,
              Sec:
                action.payload.Minute <= 0
                  ? action.payload.Sec <= 0
                    ? 0
                    : action.payload.milliSec <= 0
                    ? action.payload.Sec - 1
                    : action.payload.Sec
                  : action.payload.Sec <= 0
                  ? action.payload.milliSec <= 0
                    ? 59
                    : action.payload.Sec
                  : action.payload.milliSec <= 0
                  ? action.payload.Sec - 1
                  : action.payload.Sec,

              Minute:
                action.payload.Minute <= 0
                  ? 0
                  : action.payload.Sec <= 0
                  ? action.payload.milliSec <= 0
                    ? action.payload.Minute - 1
                    : action.payload.Minute
                  : action.payload.Minute,
            }),
    resetTimer: (state) =>
      (state = { ...state, Minute: 0, Sec: 0, milliSec: 0 }),
    clockFlow: (state) => (state = { ...state, date: Date() }),
  },
});

export const {
  addNumber,
  minusNumber,
  timeFlow,
  resetTimer,
  clockFlow,
} = counterSlice.actions;

const countStore = configureStore({
  reducer: counterSlice.reducer,
});

//------------------------------------------------------------
export default countStore;
