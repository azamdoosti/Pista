import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickhandler = () => {
    setTitle("New Title");
    /* console.log("before changed ", title);
    title = "New title";
    console.log("after title changed", title); */
  };
  /* const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear(); */
  // console.log(props);
  /* const expenseDate = new Date(2021,2,18);
    const expenseTitle='Care insurance';
    const expenseAmount = 300.45; */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => clickhandler(data)}>Change</button>
    </Card>
  );
};

export default ExpenseItem;
