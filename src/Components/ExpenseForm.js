import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const TitleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const AmaountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "T00:00:00"),
    };
    //console.log(ExpenseData);
    props.onSaveData(ExpenseData); //passing data from  child to parent
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };
  // const cancelHandler = () => {
  //   setenteredDate("");
  //   setenteredTitle("");
  //   setenteredAmount("");
  // };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
            placeholder="Enter Title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            step="0.01"
            min="0.01"
            placeholder="0.00"
            onChange={AmaountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
