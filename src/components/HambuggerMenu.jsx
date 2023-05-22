import {React, useState} from 'react'



const HambuggerMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  
  return (
    <nav>
      <div className='line' onClick={toggleNavbar}></div>
      <div className='line' onClick={toggleNavbar}></div>
      <div className='line' onClick={toggleNavbar}></div>
      {isOpen && (
        <ul>
          <li className='list-menu-line'>Blogs</li>
          <li className='list-menu-line'>Blog post</li>
          <li className='list-menu-line'>Contacts</li>
        </ul>
      )}
    </nav>
  );
}

export default HambuggerMenu