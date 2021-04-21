import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Chart from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);


const ChartComponent = ({data}) => {
  const chartConfig = {
    type: "bar3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Programming languages",
        subCaption: `I'm used in the time`,
        xAxisName: "Languges",
        yAxisName: "Miqdor",
        theme: "fusion",
      },
      data,
    },
  };
  return <ReactFC {...chartConfig} />
}

export default ChartComponent
