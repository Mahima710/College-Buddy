import React from 'react'
import axios from 'axios'

export const History = (type) => {
    axios
        .get("http://localhost:5000/expensetracker", 
        {
          withCredentials:true
        })
        .then((res) => {
          console.log(res.data);
          res.data.map((onetrans) => {
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
          
        }
        );

}
