import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses_list = [
    { id: 1, title: "Phone", amount: 60, date: new Date(21, 5, 12) },
    { id: 2, title: "TV", amount: 690, date: new Date(21, 3, 12) },
    { id: 3, title: "Case", amount: 780, date: new Date(21, 2, 12) },
    { id: 4, title: "Rim", amount: 609, date: new Date(21, 3, 12) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses_list[0].title}
        amount={expenses_list[0].amount}
        date={expenses_list[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses_list[2].title}
        amount={expenses_list[2].amount}
        date={expenses_list[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses_list[1].title}
        amount={expenses_list[1].amount}
        date={expenses_list[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses_list[3].title}
        amount={expenses_list[3].amount}
        date={expenses_list[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
