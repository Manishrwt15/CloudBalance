import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { Fullscreen } from '@mui/icons-material';

charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "App Publishing Trend",
    subcaption: "2018-2022",
    xaxisname: "Years",
    yaxisname: "Total number of apps in store",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label",
    theme: "gammel",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2020"
        },
        {
          label: "2021"
        },
        {
          label: "2022"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Apple App Store",
      data: [
        {
          value: "1962576"
        },
        {
          value: "1798024"
        },
        {
          value: "1961897"
        },
        {
          value: "1903654"
        },
        {
          value: "1642759"
        }
      ]
    },
    {
      seriesname: "Google Play Store",
      data: [
        {
          value: "2108450"
        },
        {
          value: "2469894"
        },
        {
          value: "2868084"
        },
        {
          value: "4229856"
        },
        {
          value: "3553050"
        }
      ]
    },
    {
      seriesname: "Amazon AppStore",
      data: [
        {
          value: "452054"
        },
        {
          value: "487083"
        },
        {
          value: "455873"
        },
        {
          value: "467823"
        },
        {
          value: "483328"
        }
      ]
    }
  ]
};

const BarChart = () => {
  return (
      <ReactFusioncharts
        type="mscolumn2d"
        width= '100%'
        height="60%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}

export default BarChart