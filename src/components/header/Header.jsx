import React from 'react'
import CLA from './CLA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>

    <div className='container header__container '>
        <h5>hellow I'm</h5>
        <h1>HAJIA BInNTU</h1>
        <h5>Fullstack Developer</h5>
        <CLA/>
        <HeaderSocials/>

    <div className="me">
      <img src={ME} alt='me'/>
      </div>

     <a href="#contact" className='scroll__down'> Scroll Down</a>
     
     
     
    </div>
    
    

    </header>
  )
}

export default Header