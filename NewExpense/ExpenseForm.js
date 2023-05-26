import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [ETitle,setTitle] = useState("")
    const [EAmount,setAmount] = useState("")
    const [EDate,setDate] = useState("")
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    const TitleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
    }
    const AmountChangedHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const DateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: ETitle,
            amount: EAmount,
            date: new Date(EDate)
        };
        //console.log(ExpenseData);
        props.onSaveExpenseDate(ExpenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

     
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
             <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={ETitle} onChange={TitleChangeHandler} />
             </div>
             <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={EAmount} onChange={AmountChangedHandler} />
             </div>
             <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={EDate} onChange={DateChangeHandler} />
             </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.oncancel}>cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;