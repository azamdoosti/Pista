import React from "react";
import "./newExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
