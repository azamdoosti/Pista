import React from "react";

const ExpenseDate = () => {
  const month = props.date.toLocaleDateString("en-Us", { month: "long" });
  const day = props.date.toLocaleDateString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();
  return;
  <div>
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
  </div>;
};

export default ExpenseDate;
