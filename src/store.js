import { createStore } from "redux";

const ADD = "ADD";
const MINUS = "MINUS";
const FLOW = "FLOW";
const CLOCK = "CLOCK";

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
const addNumber = (num) => {
  return {
    type: ADD,
    num,
  };
};
const minusNumber = (num) => {
  return {
    type: MINUS,
    num,
  };
};

const counter = (
  state = { date: Date(), milliSec: 99, Sec: 0, Minute: 0 },
  action
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        Minute: action.num + 1,
      };
    case MINUS:
      return {
        ...state,
        Minute: action.num - 1,
      };
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
                  : action.milliSec
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
    case CLOCK:
      return { ...state, date: Date() };

    default:
      return state;
  }
};

export const actionCreators = {
  addNumber,
  minusNumber,
  timeFlow,
  clockFlow,
};

const countStore = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default countStore;
