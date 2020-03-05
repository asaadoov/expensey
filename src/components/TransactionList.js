import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { CloudContext } from '../context/CloudState';

export const TransactionList = () => {
  const { transactions } = useContext(CloudContext);

  // console.log(transactions);
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {  
          transactions.map( transaction => 
            (
              <Transaction key={ transaction.id } transaction={ transaction } />
            ) 
          ) 
        } 
      </ul>
    </>
  )
}
