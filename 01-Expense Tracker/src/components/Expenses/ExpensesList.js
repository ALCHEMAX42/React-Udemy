import React from "react";
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
const ExpensesList =({items}) =>{


    if (items.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return <ul className="expense-list">
       {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>

};

export default ExpensesList;