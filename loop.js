import ExpenseItem from './expenseitem';
function App() {
    const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        explocation: 'otty' ,
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , explocation: 'delhi',},
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        explocation: 'pune',
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        explocation: 'kolkata',
      },
    ];
    
    
      return (
        <div className="App">
          <h1>let start coding</h1>
          
          {expenses.map(i => (
          <ExpenseItem title={i.title} amount ={i.amount} data={i.date} explocation={i.explocation}>
            
          </ExpenseItem>
          ))}
      
          
         </div>
      );
    }
    export default App;