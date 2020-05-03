import { createReducer } from "@reduxjs/toolkit";
import { actionCreator } from "./action/actionCreators";
const clockFlow = createAction("CLOCK");
const timeFlow = createAction("FLOW");

const minusNumber = createAction("MINUS");
const resetTimer = createAction("RESET");

const counter = createReducer(
  { date: Date(), milliSec: 0, Sec: 0, Minute: 0 },
  {
    [addNumber.type]: (state, action) =>
      (state = {
        ...state,
        Minute: action.payload.number + action.payload.plus,
      }),
    [minusNumber.type]: (state, action) =>
      (state = {
        ...state,
        Minute: action.payload.number - action.payload.minus,
      }),
    [timeFlow.type]: (state, action) =>
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
    [resetTimer.type]: (state) =>
      (state = { ...state, Minute: 0, Sec: 0, milliSec: 0 }),
    [clockFlow.type]: (state) => (state = { ...state, date: Date() }),
  }
);

export default counter;
