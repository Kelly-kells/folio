import React from 'react'
import "./services.css"
import data from './data'

const Services = () => {
  return (
    <section id="services">
      <h2> My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services-container">
        {
          data.map(item=>(
           <div key={item.id} className="service-light">
           <div className='service-icon'>
             {item.icon}  
           </div>
           <div className="service-details">
           <h3>{item.title}</h3>
            <p>{item.desc}</p>
           </div>
           
           </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services