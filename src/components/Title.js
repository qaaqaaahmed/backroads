import React from 'react'

function Title({ subtitle, title }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </div>
  )
}

export default Title
