import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = () => {
  const expenses = [
    {
      id: "a1",
      title: "toil paper",
      amount: 93.5,
      date: new Date(2020, 7, 15),
    },
    {
      id: "a2",
      title: "toil paper",
      amount: 90.5,
      date: new Date(2020, 9, 15),
    },
    {
      id: "a3",
      title: "toil paper",
      amount: 91.5,
      date: new Date(2020, 4, 15),
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      {/* <Footer /> */}
    </Card>
  );
};
export default Expenses;
