import React, { useState } from 'react'
import Button from './Button'

const Login = () => {
    const [Button1, setButton] = useState('')

    const handleClick = () => {
        setButton(Button1);
      };

  return (
    <div className='sign-in-posting'>
    <Button onClick={handleClick} className="signin sign" label="Log In"/>
    <Button onClick={handleClick} className="signin posting" label="Make a posting"/>
    </div>
  )
}

export default Login