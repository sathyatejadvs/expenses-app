import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props: { onAddExpense: (arg0: { id: string; title: string; amount: string; date: undefined; }) => void; }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState();

  const onFormSubmitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.onAddExpense({
      id: Math.random().toString(),
      title: title,
      amount: amount,
      date: date,
    })

    setTitle('')
    setAmount('')
    setDate(undefined)
  }

  const onTextChangeHandler = (event: any, title: string) => {
    if (title === 'title') {
      setTitle(event.target.value)
    } else if (title === 'amount') {
      setAmount(event.target.value)
    } else {
      setDate(event.target.value)
    }
  }
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={event => onTextChangeHandler(event, 'title')}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={amount} onChange={event => onTextChangeHandler(event, 'amount')}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={event => onTextChangeHandler(event, 'date')}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
