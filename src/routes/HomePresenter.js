import React from "react";
import Clock from "../components/Clock";
import Weather from "../components/Weather.js";
import TimerChart from "../components/Timer";
function HomePresenter(props) {
  const {
    Minute,
    Sec,
    milliSec,
    plusClick,
    minusClick,
    resetClick,
  } = props.state;
  return (
    <>
      <Clock />
      <div>
        <div>
          <span>
            {Minute > 9 ? Minute : "0" + Minute}:{Sec > 9 ? Sec : "0" + Sec}.
          </span>
          <span>{milliSec > 9 ? milliSec : "0" + milliSec}</span>
        </div>
      </div>
      <TimerChart />
      <div>
        <div className="Btns">
          <button value={60} onClick={plusClick}>
            + 60:00.00
          </button>
          <button value={30} onClick={plusClick}>
            + 30:00.00
          </button>
          <button value={10} onClick={plusClick}>
            + 10:00.00
          </button>
          <button value={1} onClick={plusClick}>
            + 01:00.00
          </button>
        </div>
        <div className="Btns">
          <button value={60} onClick={minusClick}>
            - 60:00.00
          </button>
          <button value={30} onClick={minusClick}>
            - 30:00.00
          </button>
          <button value={10} onClick={minusClick}>
            - 10:00.00
          </button>
          <button value={1} onClick={minusClick}>
            - 01:00.00
          </button>
        </div>
        <div className="Btns">
          <button onClick={resetClick}> RESET</button>
        </div>
      </div>
    </>
  );
}

export default HomePresenter;
