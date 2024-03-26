import { PageLinks } from './data'

import React from 'react'
import Page from './Page'

function PageLink({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {PageLinks.map((pageLink) => {
        return (
          <Page pageLink={pageLink} itemClass={itemClass} key={pageLink.id} />
        )
      })}
    </ul>
  )
}

export default PageLink
