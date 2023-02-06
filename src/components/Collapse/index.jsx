// We define here the collapse component

import React, { useState } from 'react'
import arrowToOpen from '../../assets/arrow-to-open.svg'
import arrowOpened from '../../assets/arrow-opened.svg'
import './_index.scss'

function Collapse({ title, description, i }) {
  const [isClosed, setIsClosed] = useState(true) // we define the initial status of isClosed at true
  const arrowAction = () => {
    setIsClosed(isClosed === true ? false : true) // if the section is closed (isClosed is true) the function will define the state at false (eg opened) when the function is launched and reverse
  }
  return (
    <div className="collapse" key={i}>
      <div className="collapseHeader">
        <h2>{title}</h2>
        {isClosed ? (
          <span onClick={arrowAction}>
            <img className="arrow" src={arrowToOpen} alt="En savoir plus" />
          </span>
        ) : (
          <span onClick={arrowAction}>
            <img className="arrow" src={arrowOpened} alt="En voir moins" />
          </span>
        )}
      </div>
      {!isClosed && <div className="collapseDescription">{description}</div>}
    </div>
  )
}

export default Collapse
