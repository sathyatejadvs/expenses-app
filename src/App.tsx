import { SetStateAction, useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpensesFilter from './components/ExpensesFilter';
import ExpensesList from './components/ExpensesList';

export type expsenseProps = {
  id: string;
  date: string;
  title: string;
  amount: string;
}[]

function App() {
  
  const dummy_expenses = [
    {
      id: '1',
      date: '20-12-2022',
      title: 'Credit card EMI',
      amount: '$10k'
    },
    {
      id: '2',
      date: '2-10-2022',
      title: 'Home Loan',
      amount: '$28k'
    },
    {
      id: '3',
      date: '13-2-2024',
      title: 'Iphone EMI',
      amount: '$10k'
    },
    {
      id: '4',
      date: '20-12-2022',
      title: 'Car EMI',
      amount: '$10k'
    }
  ]
  const [expenses, setExpenses] = useState<expsenseProps>(dummy_expenses);

  const addExpenseHandler = (data: any) => {
    setExpenses((prevExpense) => {
      return [data, ...prevExpense]
    });
  };
  const [selectedYear, setSelectedYear] = useState('2012');

  const selectedFilterHandler = (data: string) => {
    setSelectedYear(data);
  }
  const filteredItems = expenses.filter(item => {
    const extractDate = new Date(item.date)
    const getYear = extractDate.toLocaleString('en-US', {year: 'numeric'})
    console.log(getYear, selectedYear)
    return getYear === selectedYear;

  })
  let expensesContent: any = <p className='no-content-found'>No Content Found</p>

  
  // useEffect(() => {
  //   expenses.filter((item) => {
  //     const extractDate = new Date(item.date)
  //     const getYear = extractDate.toLocaleString('en-US', {year: 'numeric'})
  //     if (getYear === selectedYear) {
  //       return sortByYear.push({item})
  //     }
  //     return sortByYear;
  //   })
  // }, [selectedYear])
  return (
    <div className='expense-container'>
      <h1 className='expense-container__header'>
        Expenses Chart
      </h1>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      <div className='expense-container__filter-expenses'>
        <ExpensesFilter onSelectedFilter={selectedFilterHandler} selectedYear={selectedYear}/>
        <ExpensesList items={filteredItems}/>
      </div>
    </div>
  );
}

export default App;
