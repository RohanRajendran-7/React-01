import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState('2022');

  const filterHandler = (filteredYear) =>{
    console.log(expenseFilter);
    setExpenseFilter(filteredYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <div className="expenses">
      <ExpenseFilter selected = {expenseFilter} onExpensefilter = {filterHandler}/>
      <ExpenseChart expenses = {filteredExpenses}/>
      <ExpensesList items= {filteredExpenses}/>
    </div>
  );
}

export default Expenses;
