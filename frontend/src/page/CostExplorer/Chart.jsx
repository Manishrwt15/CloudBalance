import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import {useCosts} from '../../hook/useCosts';

charts(FusionCharts);


const Chart = ({chartType}) => {

  const {costs, loading, error} = useCosts();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!costs.length) return <p>No data available</p>;

  const months = Object.keys(costs[0].monthlyCost);
  const categories = [{ category: months.map(m => ({ label: new Date(m + '-01').toLocaleString('default', { month: 'short' }) })) }];

  const dataset = costs.map(service => ({
    seriesname: service.service,
    data: months.map(month => ({ value: service.monthlyCost[month] || 0 }))
  }));

  const data = {
    chart: {
      caption: "Monthly Costs by Service",
      xAxisName: "Month",
      yAxisName: "Cost (USD)",
      numberPrefix: "$",
      theme: "fusion"
    },
    categories,
    dataset
  };

  return (
    <div>
        <ReactFusioncharts
        type={chartType}
        width="100%"
        height="60%"
        dataFormat="JSON"
        dataSource={data}
      />
    </div>
  )
}

export default Chart