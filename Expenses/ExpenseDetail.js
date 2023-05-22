import React from 'react';
import './expenseitem.css'
const ExpenseDetail = (props) => {
   return ( <div className='expense-item'>
         <div className='expense-item__description'><h2>{props.explocation}</h2></div>
            <p className='expense-item__price'>  {props.title}</p>
            <p className='expense-item__price'>Rs {props.amount}</p>
    </div>
   );
}

export default ExpenseDetail