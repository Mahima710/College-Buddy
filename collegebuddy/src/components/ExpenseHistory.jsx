import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ExpenseHistory = ({ type, note,Amount, setOption,setBalance, Balance}) => {

    if (localStorage.token) {
      var headers = localStorage.token;
    }
    const [data, setdata] = useState(null)

    useEffect(() => {
      const func = async ()  =>  {
        const getdata = await axios.get(
          "http://localhost:5000/expensetracker"
          , {
            headers: {
              token: headers,
            }
          })
          setdata(getdata)
      };
      func();
      
    }, []);
    if(data) {
    console.log(data.data.data)
    var vals = data.data.data.map(one=>{
      return (
        <div className='w-5/6 shadow-listShadow' style={{padding:'5px', margin:'auto', marginTop:'1rem', height:'2rem'}}>
                <span className='text-left float-left' style={{marginLeft:'10px'}}>{one.Notes}</span>
                <span className='float-right' style={{marginRight:'10px'}}>
                    {
                        one.Transaction_type==='+'?
                        <p className='text-green-400'>{one.Transaction_type} {one.Amount_Changed}</p> :
                        <p className='text-red-400'>{one.Transaction_type} {one.Amount_Changed}</p>

                    } 
                </span>
            </div>
      )
    })
    }
    const onClick=()=> {
        setOption('Transaction')
        type==='+'?
        setBalance(Number(Balance) + Number(Amount)) :
        setBalance(Number(Balance) - Number(Amount));
    }

    return (
        <div>
            {vals}
            <div className='row'>
                    <button type='submit' onClick={()=>onClick()} className='w-1/3 bg-purple text-white col' style={{marginTop:"0.8rem", marginRight:"5px", padding:'5px'}}>Add 
                    {Option==='Transaction'?
                    ' Transaction' :
                    ' Transactions'
                    }
                    </button>
                    <button type='button' onClick={()=>setOption('History')} className='w-1/3 bg-purple text-white col' style={{marginTop:"0.8rem",padding:'5px'}}>
                    {Option==='Transaction'?
                    'View ' :
                    'Delete '
                    }
                         History</button>
                    </div>
                        
       </div>
    )
  
}

export default ExpenseHistory
/*import axios from "axios";
import React from "react";
import { History } from "./History";



const ExpenseHistory = async ({
  type,
  note,
  Amount,
  setOption,
  setBalance,
  Balance,
}) => {
  if (localStorage.token) {
    var headers = localStorage.token;
  }
  const expenses = axios
    .get("http://localhost:5000/expensetracker", {
      headers: {
        token: headers,
      }
    }
    .catch(err=>{
      console.log(err)
    })

    );
    console.log(expenses.data.data)
    
    .then((res) => {
      console.log(res.data);
      let vals = res.data.map((onetrans) => {
          return(
        <>
          <span className="text-left float-left" style={{ marginLeft: "10px" }}>
            {onetrans.note}
          </span>
          <span className="float-right" style={{ marginRight: "10px" }}>
            {type === "+" ? (
              <p className="text-green-400">
                {onetrans.type} {onetrans.Amount}
              </p>
            ) : (
              <p className="text-red-400">
                {onetrans.type} {onetrans.Amount}
              </p>
            )}
          </span>
        </>
          )
      });
      

    const vals = await expense.map((onetrans) => {
        return(
          <li>{onetrans.Notes}</li>
      <>
        <span className="text-left float-left" style={{ marginLeft: "10px" }}>
          {onetrans.Notes}
        </span>
        <span className="float-right" style={{ marginRight: "10px" }}>
          {onetrans.Transaction_type === "+" ? (
            <p className="text-green-400">
              {onetrans.Transaction_type} {onetrans.Amount_Changed}
            </p>
          ) : (
            <p className="text-red-400">
              {onetrans.Transaction_type} {onetrans.Amount_Changed}
            </p>
          )}
        </span>
      </>
        )}
    )

  const onClick = (e) => {
    e.preventDefault();
    setOption("Transaction");
    type === "+"
      ? setBalance(Number(Balance) + Number(Amount))
      : setBalance(Number(Balance) - Number(Amount));
  };

  return (
    <div>
      <div
        className="w-5/6 shadow-listShadow"
        style={{
          padding: "5px",
          margin: "auto",
          marginTop: "1rem",
          height: "2rem",
        }}
      >
          <span className='text-left float-left' style={{marginLeft:'10px'}}>{note}</span>
                <span className='float-right' style={{marginRight:'10px'}}>
                    {
                        type==='+'?
                        <p className='text-green-400'>{type} {Amount}</p> :
                        <p className='text-red-400'>{type} {Amount}</p>

                    } 
                </span>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={(e) => onClick(e)}
          className="sm:w-1/3 bg-purple text-white col"
          style={{ marginTop: "0.8rem", marginRight: "5px", padding: "5px" }}
        >
          Add
          {Option === "Transaction" ? " Transaction" : " Transactions"}
        </button>
        <button
          type="button"
          onClick={() => setOption("History")}
          className="sm:w-1/3 bg-purple text-white col"
          style={{ marginTop: "0.8rem", padding: "5px" }}
        >
          {Option === "Transaction" ? "View " : "Delete "}
          History
        </button>
      </div>
    </div>
  );
};

export default ExpenseHistory;*/
