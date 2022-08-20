import React from 'react';
import {useState} from 'react';
// import Data from './receiptData';

export default function Receipts({receiptData}) {
    return(
        <>
        {receiptData.map((receipt, index) => {
            let status;
            const {id, person, order, paid} = receipt
            if(paid){
                status = 'Settled'
            } else{
                status = 'Pending'
            }
            return(
                <div key={index}>
                <h1>{person}</h1>
                <h3>Orders</h3>
                <div className="orders">

                        <p>{order.main}</p>
                        <p>{order.protein}</p>
                        <p>{order.rice}</p>
                        <p>{order.sauce}</p>
                        <p>{order.drink}</p>

                </div>
                <h4>Total: $<span>{order.cost}</span></h4>
                <p>Bill is: <span>{status}</span></p>
                </div>
            )
        })}
        </>
    )
}