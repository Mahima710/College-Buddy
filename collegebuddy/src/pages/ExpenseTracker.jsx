import React, { useState } from 'react'
import Expensetracker from '../assets/expenseTracker.PNG'
import ExpenseTrackerForm from '../components/ExpenseTrackerForm';
import  ExpenseHistory  from '../components/ExpenseHistory';
import Navbar from '../components/Navbar.jsx'
import "../assets/expensetracker.css"
import axios from "axios";


const ExpenseTracker = () => {
    const [Balance, setBalance] = useState()
    const [Option, setOption] = useState('Transaction')
    const [Type, setType] = useState('')
    const [Note, setNote] = useState('')
    const [Amount, setAmount] = useState()


    return (
        <>
        <Navbar />
        <div className='sm:flex'>
            <img src={Expensetracker} className='float-right sm:flex-1' alt='img' />
            <div className='w-1/2 h-full tracker float-left text-center sm:flex-1' style={{ marginTop: '3rem' }}>
                <h1 className='text-indigo-900	text-6xl'>Expense Manager</h1>
                <div style={{margin:'auto',marginTop:"1rem"}}>
                    <h2 className=''>Your Balance is</h2>
                    <h1 className='font-bold text-xl'>₹ {Balance}</h1>
                </div>
                <div className='container shadow-cardShadow w-full sm:w-2/3' style={{  margin:'auto',marginTop: '1.7rem', marginBottom:'1.7rem' }}>
                    <div className='grid' style={{padding:"2rem"}}>

                    {Option==='Transaction'?
                    <ExpenseTrackerForm  Balance={Balance} setBalance={setBalance} type={Type} setType={setType} note={Note} setNote={setNote} Amount={Amount} setAmount={setAmount} option={Option} setOption={setOption}/> :
                    <ExpenseHistory  Balance={Balance} setBalance={setBalance} type={Type} setType={setType} note={Note} setNote={setNote} Amount={Amount} setAmount={setAmount} option={Option} setOption={setOption} />
                    }              
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpenseTracker
