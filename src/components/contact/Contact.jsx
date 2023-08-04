import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {PiMessengerLogoBold} from 'react-icons/pi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>najmaabdill14@gmail.com</h5>
            <a href="mailto:najmaabdillahi414@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
<PiMessengerLogoBold  className='contact__option-icon'/>
   <h4>messenger</h4>
   <h5>egatortutorials</h5>
   <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
 </article>
 <article className="contact__option">
 <BsWhatsapp  className='contact__option-icon'/>
   <h4>Whatsapp</h4>
   <h5>+1234678987</h5>
   <a href="https://api.whatsapp.com/send?phone=+25263487574758" target="_blank">Send a Message</a>
 </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message"  rows="7" placeholder='your message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact