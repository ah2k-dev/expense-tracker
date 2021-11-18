import React, { useContext, useState } from 'react';
import { transContext } from './transContext';
export const Tracker = () => {
    let { transactions, addTransaction, deleteTransaction} = useContext(transContext);
    // console.log(transactions)
    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);
    const handleAddition = (e) => {
        e.preventDefault();
        // console.log(newAmount, newDesc);
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
        e.target.reset();
        setNewAmount(0)
        setNewDesc('')
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++){
            if(transactions[i].amount > 0){
                income += transactions[i].amount
            }
        }
        return income;

    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++){
            if(transactions[i].amount < 0){
                expense += transactions[i].amount
            }
        }
        return -expense;

    }
    
    return (
        <div className="container">
            <h1 className="main_heading">Expense Tracker</h1>
            <h3>Balance</h3><h3>${getIncome() - getExpense()}</h3>
            <div className="expense-container">
                <h3>Income<br />${getIncome()}</h3>
                <h3>Expense<br />${getExpense()}</h3>
            </div>
            <h3>History</h3><hr />
            <ul className="history">
                {transactions.map((transaction, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">&#10060;</button>
                            <span>{transaction.desc}</span>
                            <span>${transaction.amount}</span>
                        </li>
                    )
                })}

            </ul>
            <h3>Add new Transaction</h3><hr />
            <form onSubmit={handleAddition} className="trans-form">
                <br /><label>Description<br /><input type="text" onChange={(ev) => setNewDesc(ev.target.value)} /></label><br />
                <label>Amount<br /><input type="number" onChange={(ev) => setNewAmount(ev.target.value)} /></label><br />
                <input type="submit" value="Add Transaction" />
            </form>

        </div>
    )
}