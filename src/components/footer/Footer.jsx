import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>

        <a href="#" className='footer__logo'>EGATOR</a>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#eperience">Eperience</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#testimonials">testimonials</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>

        <div className='footer__socials'>
           <a href="http://facebook.com"> <FaFacebook/></a> 
           <a href="http://instagram.com"> <FiInstagram/></a> 
           <a href="http://twitter.com"><FaTwitter/></a> 

        </div>

        <div className="footer__copyright">
            <small>&copy;All right reserved </small>
        </div>

    </footer>
  )
}

export default Footer