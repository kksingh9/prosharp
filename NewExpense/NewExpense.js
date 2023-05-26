import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isediting, setisediting] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setisediting(false);
    };
    
    const StartEditingHandler = () => {
        setisediting(true);
    }
    const StopEditingHandler = () => {
        setisediting(false)
    }
    return (
        <div className="new-expense">
            {!isediting && <button onClick={StartEditingHandler}>Add New Expense</button>}
            {isediting && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} oncancel= {StopEditingHandler} />}
        </div>
    );
      
}
export default NewExpense;