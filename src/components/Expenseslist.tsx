import {expsenseProps} from "../App";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

type ExpensesListProps = {
  items: expsenseProps;
}
const ExpensesList = ({items}: ExpensesListProps) => {
  if (items.length === 0) {
    return <p className="expenses-list__fallback">No Data Found.</p>
  }
  return (
    <ul className="expenses-list">
      {items.map(item => <ExpenseItem key={item.id} expenses={item}/>)}
    </ul>
  )
}

export default ExpensesList;