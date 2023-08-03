import React from 'react'
import './nav.css'
import {LiaHomeSolid} from 'react-icons/lia'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'






const Nav = () => {
    const [activeNav , setactiveNav] = useState('#')
  return (
    <nav>
                <a href="#" onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : '' } ><LiaHomeSolid/></a>
                <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '##about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#experience" honClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill/></a>
                <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
                <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav