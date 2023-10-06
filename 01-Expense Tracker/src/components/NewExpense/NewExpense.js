import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddExpense from "./AddExpense";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [show, setTrigger] = useState(0);

  function onTrigger(x){
    setTrigger(x);
  }

  return (
    <div className="new-expense">
      {show === 0 ? (
        <AddExpense trigger={onTrigger}/>
      ) : (
        <ExpenseForm trigger={onTrigger} onSaveExpenseData={SaveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
