import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 1, 11),
      title: 'Credit card EMI',
      amount: '$10k'
    },
    {
      id: 2,
      date: new Date(2022, 12, 1),
      title: 'Home Loan',
      amount: '$28k'
    },
    {
      id: 3,
      date: new Date(2022, 10, 15),
      title: 'Iphone EMI',
      amount: '$10k'
    },
    {
      id: 4,
      date: new Date(2022, 10, 15),
      title: 'Car EMI',
      amount: '$10k'
    }
  ]
  return (
    <div className='expense-container'>
      <h1 className='expense-container__header'>
        Expenses Chart
      </h1>
      {expenses.map((item) => (
        <div>
          <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
        </div>
      )
      )}
    </div>
  );
}

export default App;
