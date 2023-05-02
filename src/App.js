import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  { id: 1, title: "Phone", amount: 60, date: new Date(2023, 5, 12) },
  { id: 2, title: "TV", amount: 690, date: new Date(2021, 3, 12) },
  { id: 3, title: "Case", amount: 780, date: new Date(2022, 2, 12) },
  { id: 4, title: "Rim", amount: 609, date: new Date(2021, 3, 12) },
];

function App() {
  const [expenses, setexpenses] = useState(dummy_expenses);
  const newExpenseHandler = (expense) =>{
    console.log(expense);
    setexpenses(prevexpenses => {
      return [expense, ...prevexpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddNewExpense = {newExpenseHandler}/>
      <Expenses items = {expenses}> </Expenses>
    </div>
  );
}

export default App;
