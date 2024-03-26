import React from 'react'
import Title from './Title'
import { toursdata } from './data'
import Tour from './Tour'
function Tours() {
  return (
    <section className="section" id="tours">
      <Title subtitle="tours" title="featured" />
      <div className="section-center featured-center">
        {toursdata.map((tour) => {
          return <Tour key={tour.id} {...tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
