import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';
import './expenseitem.css';


const ExpenseItem =(props) => {
    //useState is a react hook
    
    const [title, setTitle] = useState(props.title)
    const [amount, setTitle1] = useState(props.amount)
    //let title = props.title;
    
    const clickHandler = () => {
        
        setTitle('update')
        console.log(title);
    }
    const expenamount = () => {
        setTitle1('100')
    }
    return (
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
            
            <ExpenseDetail title = {title} explocation={props.explocation} amount={amount} />
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={expenamount}>Change expense</button>
        
            </Card>
            );

}

export default ExpenseItem