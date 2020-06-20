import React,{useContext} from 'react'
import {GlobalContext} from '../context/globalstate';
import ExpenseTransaction from './expensetransactions'


const Expenselist = () => {
  const {expenseTransactions} = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
        <h2>Transaction History</h2>
        <ul className="transaction-list">
            {expenseTransactions.map(expenseTransaction=>(
          <ExpenseTransaction key={expenseTransaction.id} expenseTransaction={expenseTransaction}/>       
          ))}
        </ul>
      
    </div>
  )
}

export default Expenselist;
