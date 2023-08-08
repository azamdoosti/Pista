import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./Expensefilter";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.item.map((expense) => (
        <ExpenseItem
          title={expenses.title}
          amount={expense.amount}
          date={expenses.date}
        />
      ))}
      {/*   <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      /> */}

      {/* <Footer /> */}
    </Card>
  );
};
export default Expenses;
