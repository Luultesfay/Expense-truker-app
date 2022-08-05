import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const formDataHandler = (formEnteredData) => {
    const expenseDataFromForm = {
      ...formEnteredData,
      id: Math.random().toString(),
    };
    //console.log(expenseDataFromForm);
    props.AddExpenseData(expenseDataFromForm); //pass data from child to parent
    setisEditing(false);
  };
  const EditingToggleHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={EditingToggleHandler}>Add New Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveData={formDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
