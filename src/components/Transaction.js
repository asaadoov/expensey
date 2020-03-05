import React, { useState, useContext } from 'react';
import { CloudContext } from '../context/CloudState';
import { EditTransaction } from './EditTransaction';


export const Transaction = ({ transaction }) => {
	
	const { deleteTransaction } = useContext(CloudContext);
  const [isEditing, setIsEditing] = useState(false);
  
  const sign = transaction.amount < 0 ? '-' : '+';

	return (
		<div className="transaction">
			<li className={ transaction.amount < 0 ? 'minus' : 'plus' } onClick={ () => setIsEditing(!isEditing) }> { transaction.text } <span> { sign } $
				{ Math.abs(transaction.amount) }</span> 
				<button className="delete-btn" onClick= { () => deleteTransaction( transaction.id ) }>x</button>
			</li>
      {
        isEditing ? <EditTransaction id={ transaction.id } text={ transaction.text } amount={ transaction.amount }/> : null
      }  
		</div>
	)
}
