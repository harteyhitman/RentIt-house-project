import React, { useState } from 'react'
import Button from './Button'
import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignInModal = ({closeModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email,password)
    } catch(err) {
      console.log(err)
    }
   
  };

  return (
    <div className='sign-in-modal'>
      <div className="modal-container sign-in">
        <form type='submit' onSubmit={handleSubmit}>
          <input className='signin-modal-input' type="email"  placeholder='email......' value={email} onChange={handleEmailChange}/>
          <input className='signin-modal-input' type="password" placeholder='password......' value={password} onChange={handlePasswordChange}/> <br />
          <Button type='submit' className='sign-in-modal-button'  label="LogIn" onClick={()=> closeModal(false)}/>
        </form>
      </div>
    </div>
  )
}

export default SignInModal