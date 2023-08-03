import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='section'>
    <h5>My recent works</h5>
    <h2>portofolio</h2>
    <div className='container portfolio__container'>
        <article className='Portfolio__item'>
            <div className='Portfolio__item-image'>
                <img src={img1} alt="" />
                 </div>
            <h3>this is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' 
   target='_blank'>github</a>
  <a href="https://dribbble.com/Alien_pixels" className='btn 
   btn-primary' target='_blank'> live demo</a>
          </div>
          
          
          

        </article>

        <article className='Portfolio__item'>
           <div className='Portfolio__item-image'>
               <img src={img2} alt="" />
                </div>
           <h3>this is a Portfolio item title</h3>
           <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' 
  target='_blank'>github</a>
 <a href="https://dribbble.com/Alien_pixels" className='btn 
  btn-primary' target='_blank'> live demo</a>
         </div>
      
      
      
       </article>

       <article className='Portfolio__item'>
           <div className='Portfolio__item-image'>
               <img src={img3} alt="" />
                </div>
           <h3>this is a Portfolio item title</h3>
           <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' 
  target='_blank'>github</a>
 <a href="https://dribbble.com/Alien_pixels" className='btn 
  btn-primary' target='_blank'> live demo</a>
         </div>
       </article>

       <article className='Portfolio__item'>
           <div className='Portfolio__item-image'>
               <img src={img4} alt="" />
                </div>
           <h3>this is a Portfolio item title</h3>
           <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' 
  target='_blank'>github</a>
 <a href="https://dribbble.com/Alien_pixels" className='btn 
  btn-primary' target='_blank'> live demo</a>
         </div>
       </article>

       <article className='Portfolio__item'>
           <div className='Portfolio__item-image'>
               <img src={img5} alt="" />
                </div>
           <h3>this is a Portfolio item title</h3>
           <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' 
  target='_blank'>github</a>
 <a href="https://dribbble.com/Alien_pixels" className='btn 
  btn-primary' target='_blank'> live demo</a>
         </div>
       </article>

       <article className='Portfolio__item'>
           <div className='Portfolio__item-image'>
               <img src={img6} alt="" />
                </div>
           <h3>this is a Portfolio item title</h3>
           <div className="portfolio__item-cta">
         <a href="https://github.com" className='btn' 
  target='_blank'>github</a>
 <a href="https://dribbble.com/Alien_pixels" className='btn 
  btn-primary' target='_blank'> live demo</a>
         </div>
       </article>

    </div>
    </section>
  )
}

export default Portfolio