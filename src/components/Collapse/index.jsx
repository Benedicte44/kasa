/* Collapse component used in the about and accomodationDetails components
 * It returns a container with a header part and a description
 * To use this component we have to provide the title, description props*/

import { useState } from 'react' // the hook usestate of react is imported
import arrowToOpen from '../../assets/images/arrow-to-open.svg' // the arrow used when the collapse is closed
import arrowOpened from '../../assets/images/arrow-opened.svg' // the arrow used when the collapse is opened

function Collapse({ title, description }) {
  const [isClosed, setIsClosed] = useState(true) // we define the initial status of isClosed at true, it will be used to know if the collapse is open or not
  const arrowAction = () => {
    setIsClosed(isClosed === true ? false : true) // if the section is closed (isClosed is true) the function will define the state at false (eg opened) when the function is launched, and reverse
  }
  return (
    <div className="collapse">
      <div className="collapse__header">
        <h2>{title}</h2>
        {isClosed ? (
          // if the status of isClosed is true the arrow displayed in the header is the arrow that show up to the top, an at the event onclick it launches the arrowaction function
          <span onClick={arrowAction}>
            <img
              className="collapse__arrow"
              src={arrowToOpen}
              alt="En savoir plus"
            />
          </span>
        ) : (
          // if the status of isClosed is false the arrow displayed in the header is the arrow that show up to the bottom, an at the event onclick it launches the arrowaction function
          <span onClick={arrowAction}>
            <img
              className="collapse__arrow"
              src={arrowOpened}
              alt="En voir moins"
            />
          </span>
        )}
      </div>
      {/* if the state of isClosed is false, the component return a description section */}
      {!isClosed && <div className="collapse__description">{description}</div>}
    </div>
  )
}

export default Collapse
