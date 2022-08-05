import { useState } from "react";
//import ExpenseItem from "./Components/ExpenseItem";
import NewExpense from "./Components/NewExpense";

import Expenses from "./Components/Expenses";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const AddExpenseDataHandler = (dataFromNewExpense) => {
    setExpenses((prevExpense) => {
      return [dataFromNewExpense, ...prevExpense];
    });
  };
  //moved to Expenes.js
  // const expensesGoods = expenses.map((exp) => (
  //   <ExpenseItem
  //     key={exp.id}
  //     title={exp.title}
  //     date={exp.date}
  //     Amount={exp.amount}
  //   />
  // ));

  return (
    <div>
      <NewExpense AddExpenseData={AddExpenseDataHandler} />
      <Expenses Items={expenses} />

      {/* {expensesGoods}  moved to expense.js*/}
    </div>
  );
}

export default App;

//note data flow  from  ExpenseForm -->NewExpense-->APP  from App-->expense APP is parent
