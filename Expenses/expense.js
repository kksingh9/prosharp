import React,{useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './expenses.css';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensescontent = <p>No expenses found.</p>
  //    if(filteredExpenses.length > 0){
  //   expensescontent = filteredExpenses.map(i => (
  //   <ExpenseItem key={i.id} title={i.title} 
  //   amount ={i.amount} date={i.date} 
  //   explocation={i.explocation} />
  //   ))
  //   }
  return (
        <div>
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          {/* {filteredExpenses.length === 0 && 
          <p>No expenses found.</p>}
          {filteredExpenses.length > 0 && 
          filteredExpenses.map(i => (
          <ExpenseItem key={i.id} title={i.title} 
          amount ={i.amount} date={i.date} 
          explocation={i.explocation} />
          ))} */}
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
          {/* <ExpenseItem key={props.items[0].id} title={props.items[0].title} amount ={props.items[0].amount} date={props.items[0].date} explocation={props.items[0].explocation} />
          
          <ExpenseItem key={props.items[1].id} title={props.items[1].title} amount ={props.items[1].amount} date={props.items[1].date} explocation={props.items[1].explocation} />
          
          <ExpenseItem key={props.items[2].id} title={props.items[2].title} amount ={props.items[2].amount} date={props.items[2].date} explocation={props.items[2].explocation} />
          
          <ExpenseItem key={props.items[3].id} title={props.items[3].title} amount ={props.items[3].amount} date={props.items[3].date} explocation={props.items[3].explocation} />
           */}
          
        </Card>
        </div>
      );
    }
    export default Expenses;