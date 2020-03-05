import React, { useContext } from 'react';
import { CloudContext } from '../context/CloudState';


export const Balance = () => {
  const { transactions } = useContext(CloudContext);
  const amounts = transactions.map( transaction => transaction.amount );
  
  const balance = amounts.reduce((acc, item) => (acc + item), 0 ).toFixed(2);
  // console.log(balance);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="balance"> { balance < 0 ? '-' : '' }${ Math.abs(balance) }</h1>
    </>
  )
}
