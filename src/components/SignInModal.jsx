import React, { useState } from 'react'
import Button from './Button'

const SignInModal = ({closeModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as sending the email and password to a server for authentication
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='sign-in-modal'>
      <div className="modal-container sign-in">
        <form onSubmit={handleSubmit}>
          <input type="email"  placeholder='email......' value={email} onChange={handleEmailChange}/>
          <input type="password" placeholder='password......' value={password} onChange={handlePasswordChange}/> <br />
          <Button type='submit' className='sign-in-modal-button'  label="SignIn" onClick={()=> closeModal(false)}/>
        </form>
      </div>
    </div>
  )
}

export default SignInModal