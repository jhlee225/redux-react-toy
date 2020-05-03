import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addNumber, minusNumber, timeFlow, resetTimer } from "../store";
import HomePresenter from "./HomePresenter";

function Home({
  Minute,
  Sec,
  milliSec,
  addNumber,
  minusNumber,
  timeFlow,
  resetTimer,
}) {
  function plusClick(e) {
    addNumber({ number: Minute, plus: parseInt(e.target.value) });
  }

  useEffect(() => {
    const millitimer = setInterval(
      () => timeFlow({ milliSec: milliSec, Sec: Sec, Minute: Minute }),
      10
    );
    return () => {
      clearInterval(millitimer);
    };
  });

  function minusClick(e) {
    Minute - e.target.value < 0
      ? resetTimer()
      : minusNumber({ number: Minute, minus: parseInt(e.target.value) });
  }

  function resetClick(e) {
    resetTimer();
  }

  const state = {
    Minute: Minute,
    Sec: Sec,
    milliSec: milliSec,
    plusClick: plusClick,
    minusClick: minusClick,
    resetClick: resetClick,
  };

  return (
    <>
      <HomePresenter state={state} />
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
    addNumber: ({ number, plus }) =>
      dispatch(addNumber({ number: number, plus: plus })),
    minusNumber: ({ number, minus }) =>
      dispatch(minusNumber({ number: number, minus: minus })),
    timeFlow: ({ milliSec, Sec, Minute }) =>
      dispatch(
        timeFlow({
          milliSec: milliSec,
          Sec: Sec,
          Minute: Minute,
        })
      ),
    resetTimer: () => dispatch(resetTimer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
