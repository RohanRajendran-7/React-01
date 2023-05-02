import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredName,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onNewExpense(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredName('');
    }
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={nameChangeHandler} value={enteredName}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min='2019-01-01' max='2024-12-31' onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense </button>
                <button type="button" onClick={props.oncancel}>Cancel</button>
            </div>
        </div>
    </form>
    )
}

export default ExpenseForm