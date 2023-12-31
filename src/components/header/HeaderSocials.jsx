import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineDribbble} from 'react-icons/ai'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub/></a>
        <a href="http://dribbble.com" target="_blank"><AiOutlineDribbble/></a>


    </div>
  )
}

export default HeaderSocials