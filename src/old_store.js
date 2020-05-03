import { createStore } from "redux";
//ADJUST CREATESLICE ------------------------------------------
//ADJUST CREATEACTION() ---------------------------------------
const ADD = "ADD";
const MINUS = "MINUS";
const FLOW = "FLOW";
const CLOCK = "CLOCK";
const RESET = "RESET";
const clockFlow = (time) => {
  return {
    type: CLOCK,
    time,
  };
};
const timeFlow = (milliSec, Sec, Minute) => {
  return {
    type: FLOW,
    milliSec,
    Sec,
    Minute,
  };
};
const addNumber = (num, plus) => {
  return {
    type: ADD,
    num,
    plus,
  };
};
const minusNumber = (num, minus) => {
  return {
    type: MINUS,
    num,
    minus,
  };
};

const resetTimer = () => {
  return {
    type: RESET,
  };
};
//------------------------------------------------------------
//ADJUST CREATEREDUCER ---------------------------------------
const counter = (
  state = { date: Date(), milliSec: 99, Sec: 0, Minute: 0 },
  action
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        Minute: action.num + action.plus,
      };
    case MINUS:
      return action.num > 0
        ? {
            ...state,
            Minute: action.num - action.minus,
          }
        : state;
    case FLOW:
      return action.milliSec <= 0 && action.Sec <= 0 && action.Minute <= 0
        ? state
        : {
            date: Date(),
            milliSec:
              action.milliSec <= 0
                ? action.Sec <= 0
                  ? action.Minute <= 0
                    ? 0
                    : 99
                  : 99
                : action.milliSec - 1,
            Sec:
              action.Minute <= 0
                ? action.Sec <= 0
                  ? 0
                  : action.milliSec <= 0
                  ? action.Sec - 1
                  : action.Sec
                : action.Sec <= 0
                ? action.milliSec <= 0
                  ? 59
                  : action.Sec
                : action.milliSec <= 0
                ? action.Sec - 1
                : action.Sec,

            Minute:
              action.Minute <= 0
                ? 0
                : action.Sec <= 0
                ? action.milliSec <= 0
                  ? action.Minute - 1
                  : action.Minute
                : action.Minute,
          };
    case RESET:
      return { ...state, Minute: 0, Sec: 0, milliSec: 0 };
    case CLOCK:
      return { ...state, date: Date() };

    default:
      return state;
  }
};
//------------------------------------------------------------
export const actionCreators = {
  addNumber,
  minusNumber,
  timeFlow,
  clockFlow,
  resetTimer,
};
//ADJUST CONFIGURESTORE---------------------------------------
const countStore = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//------------------------------------------------------------
export default countStore;
