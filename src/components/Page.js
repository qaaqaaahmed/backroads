import React from 'react'

function Page({ pageLink, itemClass }) {
  return (
    <li key={pageLink.id}>
      <a href={pageLink.href} className={itemClass} rel="noreferrer">
        {pageLink.text}
      </a>
    </li>
  )
}

export default Page
