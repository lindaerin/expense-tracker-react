import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc -= item), 0)
    .toFixed(2)



    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-increase" className="money increase">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-decrease" className="money decrease">-${expense}</p>
            </div>
        </div>
    )
}
