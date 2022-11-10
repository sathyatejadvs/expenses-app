import { useState } from 'react';
import './ExpenseForm.css';

type ExpenseFormProps = {
  onAddExpense: (arg0: { 
    id: string; title: string; amount: string; date: undefined; 
  }) => void; 
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState();
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onFormSubmitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (title && amount && date) {
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
    setShowExpenseForm(false)
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

  const onAddExpenseHandler = () => {
    console.log("onAddExpenseHandler")
    setShowExpenseForm(true);
  }
  const onFormCancelHandler = () => {
    setShowExpenseForm(false);
  }
  console.log(showExpenseForm, 'showExpenseForm')
  return (
    <div>
      {showExpenseForm && <form onSubmit={onFormSubmitHandler} className='new-expense__form-container'>
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
            <input type='date' min='2012-01-01' max='2022-12-31' value={date} onChange={event => onTextChangeHandler(event, 'date')}/>
          </div>
        </div>
        <div className='new-expense__actions'>
        <button className='new-expense__submit' onClick={onFormCancelHandler}>Cancel</button>
          <button type='submit' className='new-expense__submit'>Add Expense</button>
        </div>
      </form>}
      {!showExpenseForm && <div className='new-expense__add-expense__button-container'>
        <button onClick={onAddExpenseHandler} className='new-expense__submit'>Add Expense</button>
      </div>}
    </div>
  );
};

export default ExpenseForm;
