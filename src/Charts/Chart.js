import "./Chart.css";
import ChartBars from "./ChartBars";
const Chart = (props) => {
  const ArrChartData = props.dataPoints.map((dtaPoints) => dtaPoints.value);
  const TotalMaxvalue = Math.max(...ArrChartData); //Math.max only accept individual element so we spread out the numbers fro the array
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={TotalMaxvalue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
