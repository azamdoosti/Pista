import ExpenseDate from "./ExpenseDate";
import "./content.css";
import React from "react";

const ExpenseItem = (props) => {
  /* const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear(); */
  // console.log(props);
  /* const expenseDate = new Date(2021,2,18);
    const expenseTitle='Care insurance';
    const expenseAmount = 300.45; */
  return (
    <div className="container">
      {/*     <h1 className='title'>books</h1>
     <p className='content'>profound role in shaping perspective</p> */}
      <div className="expense">
        <ExpenseDate props={props.date} />
        <div>{props.title}</div>
        <div>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
