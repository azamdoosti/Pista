import ExpenseDate from "./ExpenseDate";
// import "./content.css";
import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  /* const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear(); */
  // console.log(props);
  /* const expenseDate = new Date(2021,2,18);
    const expenseTitle='Care insurance';
    const expenseAmount = 300.45; */
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <div>{props.title}</div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
