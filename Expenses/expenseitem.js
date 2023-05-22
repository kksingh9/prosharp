import React from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card';
import './expenseitem.css'

const ExpenseItem =(props) => {
    
    return (
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
            
            <ExpenseDetail title = {props.title} explocation={props.explocation} amount={props.amount} />
            </Card>
            );

}

export default ExpenseItem