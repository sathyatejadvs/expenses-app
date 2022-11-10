import './ExpenseItem.css';

type ExpenseItemProps = {
  expenses: {
    id: string;
    date: any;
    title: string;
    amount: string;
  }
}
const ExpenseItem = ({expenses}: ExpenseItemProps) => {
  const extractDate = new Date(expenses.date)
  // console.log(expenses)
  // const date = expenses.date;
  const amount = expenses.amount;
  const title = expenses.title;

  return (
    <div>
      <div className="expense-item">
        <div className="time-with-title">
          <div className="expense-date-container">
            <div className="expense-month">{extractDate.toLocaleString('en-US', {month: 'long'})}</div>
            <div className="expense-year">{extractDate.toLocaleString('en-US', {year: 'numeric'})}</div>
            <div className="expense-day">{extractDate.toLocaleString('en-US', {day: 'numeric'})}</div>
          </div>
          <div className="expense-item__description">{title}</div>
        </div>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;