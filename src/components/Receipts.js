import React from 'react';
import {useState} from 'react';

export default function Receipts({receiptData, patron}) {

    const [bill,  setBill] = useState({});

    const togglePaid = (e) => {
        if(e.target.innerHTML ===  'True'){
            e.target.innerHTML = 'False'
        } else if(e.target.innerHTML === 'False'){
            e.target.innerHTML = 'True'
        }
    }

    const display = () => {
        return(
            <div>
            {receiptData.map((receipt, index) => {

                let status;
                const {person, order, paid} = receipt
                if(paid){
                    status = 'True'
                } else{
                    status = 'False'
                }
                return(
                    <div key={index} className="record">
                    <h1>{person}</h1>
                    <h3>Orders</h3>
                    <div className="orders">
                        <hr></hr>
    
                            <p className="boldMe">{order.main}</p>
                            <hr></hr>
                            <p>{order.protein}</p>
                            <p>{order.rice}</p>
                            <p>{order.sauce}</p>
                            <p>{order.drink}</p>
                        <hr></hr>
                    </div>
                    <h4>Total: $<span>{order.cost}</span></h4>
                    <p>Paid? <span onClick={togglePaid}>{status}</span></p>

                    </div>
                )
            })}

            </div>
        )
    }

    const findMe = () => {
        return(
            <div>
            {receiptData.map((receipt, index) => {
                let status;
                const {person, order, paid} = receipt
                if(paid){
                    status = 'True'
                } else{
                    status = 'False'
                }
                if(person.toLowerCase().indexOf(patron) > -1){
                return(
                    <div key={index} className="record">
                    <h1>{person}</h1>
                    <h3>Orders</h3>
                    <div className="orders">
                        <hr></hr>
    
                            <p className="boldMe">{order.main}</p>
                            <hr></hr>
                            <p>{order.protein}</p>
                            <p>{order.rice}</p>
                            <p>{order.sauce}</p>
                            <p>{order.drink}</p>
                        <hr></hr>
                    </div>
                    <h4>Total: $<span>{order.cost}</span></h4>
                    <p>Paid? <span onClick={togglePaid}>{status}</span></p>
                    </div>
                )}
            }
            )
            }
            </div>
        )
    }
    return patron ? findMe() : display()
    // return(
    //     <>
    //     {receiptData.map((receipt, index) => {
    //         let status;
    //         const {id, person, order, paid} = receipt
    //         if(paid){
    //             status = 'True'
    //         } else{
    //             status = 'False'
    //         }
    //         return(
    //             <div key={index}>
    //             <h1>{person}</h1>
    //             <h3>Orders</h3>
    //             <div className="orders">

    //                     <p>{order.main}</p>
    //                     <p>{order.protein}</p>
    //                     <p>{order.rice}</p>
    //                     <p>{order.sauce}</p>
    //                     <p>{order.drink}</p>

    //             </div>
    //             <h4>Total: $<span>{order.cost}</span></h4>
    //             <p>Paid? <span>{status}</span></p>
    //             </div>
    //         )
    //     })}
    //     </>
    // )
}