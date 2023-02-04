// We define here the slide show component
import { useState } from 'react'
import arrowBack from '../../assets/arrow-back.svg'
import arrowNext from '../../assets/arrow-next.svg'

function Slideshow({ pictures }) {
  const [currentIndex, discoverNewPicture] = useState(0)
  const nbOfPictures = pictures.length
  const currentPicture = pictures[currentIndex]
  const nextPicture = () => {
    discoverNewPicture(currentIndex === nbOfPictures - 1 ? 0 : currentIndex + 1)
  }
  const previousPicture = () => {
    discoverNewPicture(currentIndex === 0 ? nbOfPictures - 1 : currentIndex - 1)
  }

  return (
    <div className="slideshow">
      <img src={currentPicture} alt="logement" />
      {nbOfPictures > 1 && (
        <div>
          <span className="arrowBack" onClick={previousPicture}>
            <img src={arrowBack} alt="go to previous" />
          </span>
          <span className="arrowNext" onClick={nextPicture}>
            <img src={arrowNext} alt="go to next" />
          </span>
        </div>
      )}
      <div className="picturesDiag">
        {currentIndex + 1}/{nbOfPictures}
      </div>
    </div>
  )
}

export default Slideshow

// {pictures.map((picture) => {
//     return <img src={picture} alt="logement" />
//   })}
