import React from "react";
import { connect } from "react-redux";
import { PieChart, Pie } from "recharts";
function Timer({ Minute, Sec, milliSec }) {
  const data01 = [
    { name: "remainMinute", value: 60 - Minute },
    { name: "Minute", value: Minute },
  ];

  const data02 = [
    { name: "remainMilliSec", value: 60 - Sec },
    { name: "Sec", value: Sec },
  ];
  const data03 = [
    { name: "remainMilliSec", value: 100 - milliSec },
    { name: "milliSec", value: milliSec },
  ];
  return (
    <div className="TimerChart">
      <PieChart width={350} height={200}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="Minute"
          cx="30%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#FF8042"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="Second"
          cx="30%"
          cy="50%"
          innerRadius={55}
          outerRadius={75}
          fill="#FFBB28"
        />
        <Pie
          data={data03}
          dataKey="value"
          nameKey="MilliSecond"
          cx="30%"
          cy="50%"
          innerRadius={35}
          outerRadius={50}
          fill="#0088FE"
        />
      </PieChart>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    Minute: state.Minute,
    Sec: state.Sec,
    milliSec: state.milliSec,
  };
}
export default connect(mapStateToProps)(Timer);
