import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Clock from "../components/Clock";
function Home({ Minute, Sec, milliSec, addNumber, minusNumber, timeFlow }) {
  function plusClick(e) {
    addNumber(Minute);
  }

  useEffect(() => {
    const millitimer = setInterval(() => timeFlow(milliSec, Sec, Minute), 10);
    return () => {
      clearInterval(millitimer);
    };
  });

  function minusClick(e) {
    minusNumber(Minute);
  }

  return (
    <>
      <button onClick={plusClick}>Plus</button>
      <span>
        {Minute}:{Sec > 9 ? Sec : "0" + Sec}.
      </span>
      <span>{milliSec > 9 ? milliSec : "0" + milliSec}</span>
      <button onClick={minusClick}>Minus</button>
      <Clock />
    </>
  );
}

function mapStateToProps(state) {
  return {
    Minute: state.Minute,
    Sec: state.Sec,
    milliSec: state.milliSec,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNumber: (number) => dispatch(actionCreators.addNumber(number)),
    minusNumber: (number) => dispatch(actionCreators.minusNumber(number)),
    timeFlow: (milliSec, Sec, Minute) =>
      dispatch(actionCreators.timeFlow(milliSec, Sec, Minute)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
