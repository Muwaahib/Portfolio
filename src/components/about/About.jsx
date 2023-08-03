import React from 'react'
import './about.css'
import Me from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt="" />

          </div>

        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Year working</small>
            </article>

            <article className='about__card'>
    <AiOutlineUsergroupAdd className='about__icon'/>
    <h5>Clients</h5>
    <small>200+ Wordwide</small>
  </article>

  <article className='about__card'>
    <VscFolderLibrary className='about__icon'/>
    <h5>projects</h5>
    <small>80+ completed</small>
  </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis, repudiandae nobis amet minus officia dolor nesciunt necessitatibus optio sequi alias autem quia corporis 
          </p>
          <a href="#contact" className='btn btn-primary'> let's Talk</a>

        </div>

      </div>
      
    </section>
  )
}

export default About