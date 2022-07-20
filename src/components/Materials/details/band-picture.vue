<template>
  <div style="width: 100%; height: 417px" ref="band"></div>
</template>

<script>
// import bandData from "@/assets/json/band.json";
export default {
  name: "band-picture",
  data() {
    return {
      chartInstance: null,
      banddata: {},
    };
  },
  mounted() {
    this.chartInstance = this.$echarts.init(this.$refs.band);
    this.getData();
  },
  methods: {
    async getData() {
      const banddata = await this.$api.getBandData();
      // const banddata = bandData;
      this.banddata = banddata;
      this.setOption();
    },
    setOption() {
      const Xdata = this.banddata.source.x;
      const Ydata = this.banddata.source.y;
      const markLinedata = this.banddata.markLinedata;
      this.chartInstance.setOption({
        title: {},
        tooltip: {},
        toolbox: {
          feature: { saveAsImage: {}, dataView: {}, restore: {}, dataZoom: {} },
        },
        dataset: {
          source: [Xdata, Ydata],
        },
        xAxis: [
          {
            axisLine: { onZero: false },
            min: "dataMin",
            max: function (value) {
              return value.max + 0.001;
            },
            position: "bottom",
            axisLabel: { show: false },
            axisTick: { show: false },
          },
          {
            axisLine: { onZero: false },
            min: "dataMin",
            max: "dataMax",
            position: "top",
          },
        ],
        yAxis: [
          {
            axisLine: { onZero: false },
            min: -15,
            max: 12,
            axisLabel: { showMaxLabel: false },
            name: "Energy(eV)",
            nameLocation: "center",
            position: "left",
          },
          {
            axisLine: { onZero: false },
            axisLabel: {},
            position: "right",
          },
        ],
        series: [
          {
            type: "line",
            seriesLayoutBy: "row",
            showSymbol: false,
            itemStyle: { color: "#FF0000" },
            markLine: {
              symbol: ["none", "none"], // 去掉箭头
              lineStyle: { type: "dashed", color: "black" },
              label: { position: "start", formatter: "{b}" },
              data: markLinedata,
            },
          },
        ],
      });
    },
  },
};
</script>
