import Chart from "../Charts/Chart";
const ExpensesChart = (props) => {
  //accept filtered data from Expenses.js
  const ChartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const month = expense.date.getMonth();
    ChartDataPoints[month].value += expense.amount; //update the value of each month from the filtered expense
  }
  return (
    <div>
      <Chart dataPoints={ChartDataPoints} />
      {/*transfer data to Chart*/}
    </div>
  );
};
export default ExpensesChart;
