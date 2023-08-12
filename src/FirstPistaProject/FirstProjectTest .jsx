import React, { useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense/newExpense";
const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "toil paper1",
    amount: 93.5,
    date: new Date(2022, 7, 15),
  },
  {
    id: "a2",
    title: "toil paper2",
    amount: 90.5,
    date: new Date(2020, 9, 15),
  },
  {
    id: "a3",
    title: "toil paper3",
    amount: 91.5,
    date: new Date(2021, 4, 15),
  },
];

const FirstProjectTest = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  /*  console.log("I am in App component");
    console.log(expense); */

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default FirstProjectTest;
