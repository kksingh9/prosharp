import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';
import './expenseitem.css';


const ExpenseItem =(props) => {
    const clickHandler = () => {
        console.log('Clicked!!!');
    }
    return (
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
            
            <ExpenseDetail title = {props.title} explocation={props.explocation} amount={props.amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickHandler}>Delete Title</button>
            </Card>
            );

}

export default ExpenseItem