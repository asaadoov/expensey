import React, { useState, useContext } from 'react';
import { CloudContext } from '../context/CloudState';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const EditTransaction = ({ id, text, amount }) => {

	const [newText, setNewText] = useState(text);
	const [newAmount, setNewAmount] = useState(amount);
  const [modalIsOpen,setIsOpen] = useState(true);
	const { deleteTransaction, addTransaction } = useContext(CloudContext);
	
  function closeModal(){
    setIsOpen(false);
	}
	
	const onSubmit = e => {
    e.preventDefault();
		const newTransaction = {
      id,
      text: newText,
      amount: +newAmount
		}
		
		deleteTransaction(id);
		addTransaction(newTransaction);
		closeModal()
	}

	return (
		<div>
			<Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="editModal">
				<h3>Edit Transaction</h3>
				<form onSubmit= { onSubmit }>
					<div className="form-control">
						<label htmlFor="text">Text</label>
						<input type="text" value={newText} onChange={e => setNewText(e.target.value)} placeholder="Enter text..." />
					</div>
					<div className="form-control">
						<label htmlFor="amount">
							Amount <br />
							(negative - expense, positive - income)
						</label>
						<input type="number" value={newAmount} onChange={e => setNewAmount(e.target.value)}  placeholder="Enter amount..." />
					</div>
					<button className="btn" >Edit transaction</button>
				</form>
			</Modal>
		</div>
	)
}
