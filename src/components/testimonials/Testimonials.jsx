import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {

    const data = [
        {
            avatar:AVTR1,
            name:"tina snow",
            review:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiaillum rem ad quisquam nemo commodi obcaecati vero rerum esse quosNostrum quis delectus maxime, molestiae omnis culpa                    '
        },
        {
            avatar:AVTR2,
            name:"tina snow",
            review:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiaillum rem ad quisquam nemo commodi obcaecati vero rerum esse quosNostrum quis delectus maxime, molestiae omnis culpa                    '
        },

        {
            avatar:AVTR3,
            name:"tina snow",
            review:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiaillum rem ad quisquam nemo commodi obcaecati vero rerum esse quosNostrum quis delectus maxime, molestiae omnis culpa                    '
        },

        {
            avatar:AVTR4,
            name:"tina snow",
            review:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiaillum rem ad quisquam nemo commodi obcaecati vero rerum esse quosNostrum quis delectus maxime, molestiae omnis culpa                    '
        }
    ]
  return (
    <section id='Testimonials'>
        <h5>Review clients</h5>
        <h2>Testimonials</h2>
        <Swiper className='container testimonial__contaner'
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}>
          {
            data.map(({avatar,name,review},index) =>{
                return(
                    <SwiperSlide key={index} className='testimonials'>
                    <div className="client__avator">
                        <img src={avatar} alt="" />
                    </div>
                    <h5 className='client__name'>{name}</h5>
        <small className='client__review'>{review}
        </small>
                </SwiperSlide>
                )
            })
          }


        </Swiper>


    </section>
  )
}

export default Testimonials