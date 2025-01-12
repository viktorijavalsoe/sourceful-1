import React, { useState } from 'react';
import firebase from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import PrimaryButton from './PrimaryButton';
import TextArea from './TextArea';

const AddComment = ({ factory }) => {
	const [ comment, setComment ] = useState('');
	const db = firebase.firestore();
	const auth = useAuth();

  function addFactoryToMyList() {
	  db.collection('users').doc(auth.currentUser.uid).collection('myList').add({
			comment: comment,
			name: factory.name,
		  factoryID: factory.id,
		  userID: auth.currentUser.uid,
			employee: factory.employee,
		  quantity: factory.quantity,
			producttype: factory.producttype,
			category: factory.category,
			country: factory.address.country,

	  }).then((response) => {
		  if(response.id) {
			  console.log('succesfully added factory to my list');
		  }
	  });
  }

	function handleChange(e) {
		setComment(e.target.value);
	}
	return (
		<div>
			<h1>Add factory</h1>
			<h2>{factory.name}</h2>
			<TextArea onChange={handleChange} label="Comment" placeholder="Add your personal comment" />
			<PrimaryButton propFunction={addFactoryToMyList}>Add factory</PrimaryButton>
		</div>
	);
};
export default AddComment;
