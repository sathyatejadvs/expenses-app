import React from "react";
import './ExpenseItem.css';

type ExpenseItemProps = {
  date: any;
  title: string;
  amount: string;
}
const ExpenseItem = ({date, amount, title}: ExpenseItemProps) => {
  const options = {month: 'long', day: 'numeric', year: 'numeric'}

  return (
    <div className="expense-item">
      <div>{date.toLocaleString('en-US', options)}</div>
      <div className="expense-item__description">
        {title}
      </div>
      <div className="expense-item__price">{amount}</div>
    </div>
  )
}

export default ExpenseItem;