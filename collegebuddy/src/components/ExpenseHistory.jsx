import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ExpenseHistory = ({setOption}) => {

    const [data, setdata] = useState(null)

    useEffect(() => {
      const func = async ()  =>  {
        const getdata = await axios.get(
          "http://localhost:5000/expensetracker", 
          {
            withCredentials: true,
          }
          )
          setdata(getdata)
      };
      func();     
    }, []);
    if(data) {
    if(!data.data.data) {
      var vals = data.data.message
    }
    else {vals = data.data.data.map(one=>{
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
  }}
  
    const onClick=()=> {
        setOption('Transaction')
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
