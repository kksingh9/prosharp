import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [ETitle,setTitle] = useState("")
    const [EAmount,setAmount] = useState("")
    const [EDate,setDate] = useState("")
   
    const enteredtitle = (event) => {
        
        setTitle(event.target.value);
    }
    const enteredAmount = (event) => {
        //console.log(event);
        setAmount(event.target.value);
    }
    const enteredDate = (event) => {
        //console.log(event);
        setDate(event.target.value);
    }
  

    return (
        <form>
            <div className="new-expense__controls">
             <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={enteredtitle} />
             </div>
             <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={enteredAmount} />
             </div>
             <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" onChange={enteredDate} />
             </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;