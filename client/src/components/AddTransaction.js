import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const {addTransaction} =  useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: parseInt(amount)
        }

        addTransaction(newTransaction);
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form id ='transactionForm'>
                <div className="form-control">
                    <label htmlFor = "text">Item</label>
                    <input type = "text" 
                            value={text} 
                            onChange = {(e) => setText(e.target.value)} 
                            placeholder="Enter Transaction" />
                </div>

                <div className="form-control">
                    <label htmlFor = "amount">
                        Amount <br/>(negative - expense, postive + income)
                    </label>
                    <input type = "number"
                            value = {amount}
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder="Enter Amount" />
                </div>
                
                <button className="btn" onClick={onSubmit}>Add Transaction</button>
            </form>
        </div>
    )
}
