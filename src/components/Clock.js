import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clockFlow } from "../store";
function Clock({ time, clockFlow }) {
  useEffect(() => {
    const Clock = setInterval((time) => {
      clockFlow(time);
    }, 1000);
    return () => {
      clearInterval(Clock);
    };
  });
  return <span>{time}</span>;
}
function mapStateToProps(state) {
  return {
    time: state.date,
  };
}

function mapDispatchToProps(dispatch) {
  return { clockFlow: (time) => dispatch(clockFlow(time)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
