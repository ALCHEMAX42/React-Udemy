function AddExpense(props) {
    const addHandler=()=>{
        props.trigger(1);
    }
  return (
    <div>    
        <button onClick={addHandler}>Add New Expense</button>
    </div>
  );
}

export default AddExpense;
