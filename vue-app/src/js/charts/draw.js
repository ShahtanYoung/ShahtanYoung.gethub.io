import echarts from "echarts";
export default function (thisis) {
    
  var option = {
    color: ["grey"],
    xAxis: {
      inverse: true,
      type: "category",
      data: [],
      axisLine: {
        lineStyle: {
          color: "grey",
        },
      },
    },
    yAxis: {
      max: 100,
      inverse: false,
      nameTextStyle: {
        color: "grey",
        fontSize: 16,
      },
      axisLine: {
        lineStyle: {
          color: "grey",
        },
      },
      type: "value",
    },
    series: [
      {
        data: [],
        type: "line",
        symbol: "none",
        lineStyle: {
          normal: {
            color: "#8AE09F",
          },
        },
      },
    ],
    grid: {
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 100,
      borderColor: "#ccc",
    },
    stateAnimation: {
      duration: 300,
    },
    animation: false,
  };

  for (let i = 0; i < 121; i++) {
    option.xAxis.data[i] = i / 2;
    option.series[0].data[i] = null;
  }
  let drawIndex = 0;
  let drawer = function () {
    drawIndex += 1;
    if (drawIndex == 2) {
      drawIndex = 0;
      thisis.chartLine.setOption(option);
    }
  };
  let drawWave = null;
  drawWave = setInterval(function () {
    let randomMath = Math.random() * 100;
    option.series[0].data.unshift(randomMath);
    option.series[0].data.pop(1);
    console.log(111);
    drawer();
  }, 500);
}
