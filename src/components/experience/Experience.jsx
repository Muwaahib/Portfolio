import React from 'react' 
import'./experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return(
      <section id='experience'>
     <h5>What skills I have</h5>
      <h2>My Experience</h2>

     <div className='container experience_container'>
         <div className='experience_frontend'>
         <h3>Backend Development</h3>
          <div className='experience_content'>
             <article classname='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
   <small classname='text-light'>Experience</small>
              </div>
                     </article>
 <article classname='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>CSS</h4>
  <small classname='text-light'>Intermediate</small>
      </div>
  </article> 
   <article classname='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
      <div>
      <h4>JavaScript</h4>
 <small classname='text-light'>Experience</small>
      </div>
  </article> 
   <article classname='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
   <div>
   <h4>Bootstrap</h4>
   <small classname='text-light'>Experience</small>
   </div>
   
  </article> 
   <article classname='experience_details'>
      <BsPatchCheckFill className='experience_details-icon'/>
   <div>
   <h4>React</h4>
   <small classname='text-light'>Experience</small>
   </div>
   
  </article> 
                         </div>
                    </div>
                {/* end frontend */}
                <div className='experience_backend'>

                <h3>Backend Development</h3>
         <div className='experience_content'>
            <article classname='experience_details'>
             <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
   <small classname='text-light'>Experience</small>
              </div>
              
                    </article>
<article classname='experience_details'>
     <BsPatchCheckFill className='experience_details-icon'/>
 <div>
 <h4>CSS</h4>
    <small classname='text-light'>Intermediate</small>
 </div>
 
 </article> 
  <article classname='experience_details'>
     <BsPatchCheckFill className='experience_details-icon'/>
    <div>
    <h4>JavaScript</h4>
 <small classname='text-light'>Experience</small>
    </div>
    
 </article> 
  <article classname='experience_details'>
     <BsPatchCheckFill className='experience_details-icon'/>
    <div>
    <h4>Bootstrap</h4>
 <small classname='text-light'>Experience</small>
    </div>
    
 </article> 
  <article classname='experience_details'>
     <BsPatchCheckFill className='experience_details-icon'/>
   <div>
   <h4>React</h4>
  <small classname='text-light'>Experience</small>
   </div>
   
 </article> 
                        </div>

                </div>
                
            </div>
 
 
 

        </section>
    )
}

export default Experience