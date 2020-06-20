import React,{useState,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from '../context/globalstate'

const Addtransaction = () => {

const {addIncome} = useContext(GlobalContext);
const {addExpense} = useContext(GlobalContext);

const [income,setIncome] = useState({
  incomeText:"",
  incomeAmount:0,
})

const onChangeIncome = e => {
  setIncome({...income,[e.target.name]:[e.target.value]})
  //console.log(income);
}

const onSubmitIncome = e => {
  e.preventDefault();

const newIncomeTransaction = { 
  id:uuidv4(),
  incomeText:income.incomeText,
  incomeAmount:income.incomeAmount * 1,
}
//console.log(newIncomeTransaction)
addIncome(newIncomeTransaction);

//setIncome({
//  incomeText:"",
//  incomeAmount:0,
// });


}

// Expense Code Start//
const [expense,setExpense] = useState({
  expenseText:"",
  expenseAmount:0,
})

const onChangeExpense = e => {
  setExpense({...expense,[e.target.name]:[e.target.value]})
  //console.log(expense);
}

const onSubmitExpense = e => {
  e.preventDefault();

const newExpenseTransaction = { 
  id:uuidv4(),
  expenseText:expense.expenseText,
  expenseAmount:expense.expenseAmount * 1,
}
//console.log(newExpenseTransaction)
addExpense(newExpenseTransaction);


// setExpense({
//  expenseText:"",
//  expenseAmount:0,
//});
};

  return (
    <div className="form-wrapper">
    <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
      <input 
      type="text" 
      placeholder="Add Income" 
      name="incomeText" 
      autoComplete="off" 
      onChange={onChangeIncome}
      />
      <input 
      type="text" 
      placeholder="Amount" 
      name="incomeAmount" 
      autoComplete="off" 
      onChange={onChangeIncome}
      />
      <input type="submit" value="Submit"/>
      </div>
    </form>

    <form onSubmit={onSubmitExpense}>
    <div className="input-group expense">
      <input type="text" placeholder="Add Expense" name="expenseText" autoComplete="off" onChange={onChangeExpense}/>
      <input type="text" placeholder="Amount" autoComplete="off" name="expenseAmount" onChange={onChangeExpense}/>
      <input type="submit" value="Submit"/>
      </div>
    </form>
    </div>
  )
}

export default Addtransaction;
