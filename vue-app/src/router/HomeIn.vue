<template>
  <div>
    <div class="content_draw">
      <div id="draw"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.chartLine = echarts.init(document.getElementById("draw"));
    let thisis = this;
    var option = {
      color: ["grey"],
      xAxis: {
        inverse: true,
        type: "category",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#888",
            width: 1,
            type: "solid",
          },
        },
        data: [],
        splitNumber: 12,
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        max: 100,
        min:0,
        splitNumber: 10,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#888",
            width: 1,
            type: "solid",
          },
        },

        inverse: false,
        nameTextStyle: {
          color: "grey",
          fontSize: 16,
        },
        axisLine: {
          show: false,
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
        show: true,
        backgroundColor: "rgba(0,0,0,0)",
        borderWidth: 1,
        borderColor: "#000",
        width: "100%",
        height: "100%",
        grid: {
          top: "top",
          left: "left",
          right: "right",
          bottom: "bottom",
          // containLabel: false,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
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
  },
};
</script>
<style>
#draw {
  width: 100%;
  height: 30vmax;
  border: 1px rgb(33, 33, 33) solid;
}

.content_draw {
  width: 100%;
  height: 30vmax;
  border: 1px rgb(33, 33, 33) solid;
}
</style>
