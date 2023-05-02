import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const [isEditing, setisEditing] = useState(false);

    const newExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        setisEditing(false);
    }

    const startEditingHandler = () => {
        setisEditing(true);
    }
    const cancelEditingHandler = () =>{
        setisEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && <ExpenseForm oncancel = {cancelEditingHandler} onNewExpense = {newExpenseHandler}/>}
    </div>
}

export default NewExpense