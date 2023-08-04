import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './service.css'


const Services = () => {
  return (
    <section id='Services'>  
     <h5>What I Offer</h5>
     <h2>Services</h2>
      <div className='container Services__container'>
        <article className='Services'>
          <div className='Services__head'>
            <h3>UL/Ux desingn</h3>

          </div>
          <ul className='Services__list'>
            <li>
            <BsCheck className='service__list-icon' />
            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
          </ul>

        </article>

        {/* end of ul/ux */}

        <article className='Services'>
          <div className='Services__head'>
            <h3>web development</h3>

          </div>
          <ul className='Services__list'>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
 <BsCheck className='service__list-icon'/>
 <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
 </li>
          </ul>

        </article>

        {/* end wed development */}


        <article className='Services'>
          <div className='Services__head'>
            <h3>contact creation</h3>

          </div>
          <ul className='Services__list'>
            <li>
            <BsCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
  <li>
  <BsCheck className='service__list-icon'/>
  <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
  </li>
          </ul>

        </article>

        {/* end of contact creation */}



      </div>
    </section>
  )
}

export default Services