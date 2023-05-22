import React from 'react';
import ExpenseItem from './expenseitem';
import Card from '../UI/Card';
import './expenses.css';
const Expenses = (props) => {
  return (
        <Card className="expenses">
          {props.items.map(i => (
          <ExpenseItem key={i.id} title={i.title} amount ={i.amount} date={i.date} explocation={i.explocation} />
          ))}
          
        </Card>
      );
    }
    export default Expenses;