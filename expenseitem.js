import './expenseitem.css'
function ExpenseItem(props){
   
    return (<div className='expense-item'><h1>{props.data.toISOString()}</h1>
            <div className='expense-item__description'><h2>{props.explocation}</h2></div>
            <p className='expense-item__price'>  {props.title}</p>
            <p className='expense-item__price'>Rs {props.amount}</p>
            
            </div>);

}

export default ExpenseItem