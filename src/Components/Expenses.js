import "./Expenses.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  console.log(props.Items);
  const [filteredYear, setFilterdYear] = useState("2020");

  const filterHandler = (filteredYear) => {
    //filteryear===event.target.value from child component
    setFilterdYear(filteredYear);
  };
  const filteredExpenses = props.Items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  const expensesGoods = filteredExpenses.map((exp) => (
    <ExpenseItem
      key={exp.id}
      title={exp.title}
      date={exp.date}
      Amount={exp.amount}
    />
  ));
  // const expensesGoods = props.Items.map((exp) => (       //props.Items replaced by filteredExpenses
  //   <ExpenseItem
  //     key={exp.id}
  //     title={exp.title}
  //     date={exp.date}
  //     Amount={exp.amount}
  //   />
  // ));

  return (
    <div className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      {/*transfer filteredExpenses data to ExpenseChart */}
      <ExpensesFilter
        addfilteredYear={filteredYear}
        onChangeFilter={filterHandler}
      />
      {filteredExpenses.length === 0
        ? ` No EXPENSE FOUND IN YEAR ${filteredYear}`
        : expensesGoods}

      {/* //OR//
       {filteredExpenses.length === 0 &&
        ` No EXPENSE FOUND IN YEAR ${filteredYear}`}
      {filteredExpenses.length > 0 && expensesGoods} */}
    </div>
  );
};
export default Expenses;

//props.items.filter(year=>year===filteredYear?)
