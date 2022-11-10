import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseItem from './components/ExpenseItem';

type expsenseProps = {
  id: string;
  date: string;
  title: string;
  amount: string;
}

function App() {
  
  const dummy_expenses = [
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
  const [expenses, setExpenses] = useState<expsenseProps>({
    id: '',
    date: '',
    title: '',
    amount: ''
  });

  const addExpenseHandler = (data: any) => {
    console.log(data)
    setExpenses(data);
  };
  console.log(expenses, 'ex');

  return (
    <div className='expense-container'>
      <h1 className='expense-container__header'>
        Expenses Chart
      </h1>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      {expenses.id ? <ExpenseItem expenses={expenses}/>: null}
    </div>
  );
}

export default App;
