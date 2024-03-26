import React from 'react'
import Title from './Title'
import { servicesAvailable } from './data'
import Service from './Service'

function Services() {
  return (
    <section className="section services" id="services">
      <Title subtitle="Services" title="our" />
      <div className="section-center services-center">
        {servicesAvailable.map((service) => {
          return <Service key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default Services
