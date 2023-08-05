import React from "react";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense/newExpense";

const FirstProjectTest = () => {
  const addExpenseHandler = (expense) => {
    console.log("I am in App component");
    console.log(expense);
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </>
  );
};

export default FirstProjectTest;
