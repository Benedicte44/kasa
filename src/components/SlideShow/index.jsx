/* Slideshow component
 * It returns a container that reveals one picture of the product, the user can then navigate to the previous or next picture if there are more than one picture*/
import PropTypes from 'prop-types'
import { useState } from 'react' // The react component usestate to get the state of a variable
import arrowBack from '../../assets/images/arrow-back.svg' // The arrowback image to navigate to the previous image
import arrowNext from '../../assets/images/arrow-next.svg' // The arrowNext image to navigate to the next image

function Slideshow({ pictures }) {
  const [currentIndex, discoverNewPicture] = useState(0) // We define a state O for the currentIndex variable that is used to define which picture have to appear in the dom and which one comes next and before
  const nbOfPictures = pictures.length // To calculate how many pictures we have
  const currentPicture = pictures[currentIndex] // To know which picture is revealed in the dom
  const nextPicture = () => {
    // Give the next picture index calculated by the function using the state
    // if the currentIndex is equal to the index of the last image in the array, we return the O index, else we add 1 to the currentIndex
    discoverNewPicture(currentIndex === nbOfPictures - 1 ? 0 : currentIndex + 1)
  }
  const previousPicture = () => {
    // Give the previous picture index calculated by the function using the state
    // if the currentIndex is equal to the index of the first image in the array, we return the index removing 1 from the array length (=last picture of the array), otherwise we remove 1 from the currentIndex
    discoverNewPicture(currentIndex === 0 ? nbOfPictures - 1 : currentIndex - 1)
  }

  return (
    <div className="slideshow">
      <img src={currentPicture} alt="logement" className="slideshow__pic" />
      {nbOfPictures > 1 && ( // if the array of pictures contains more than 1 picture, arrows to navigate and a counter of images are rendered
        <div className="slideshow__img-conditioned">
          <div className="slideshow__arrow">
            <span onClick={previousPicture}>
              {/* by clicking the arrow back, the previousPicture function is launched so that the state of currentIndex changes, and by consequence currentPicture too */}
              <img src={arrowBack} alt="go to previous" />
            </span>
            <span onClick={nextPicture}>
              {/* by clicking the arrownext, the nextPicture function is launched so that the state of currentIndex changes, and by consequence currentPicture too */}
              <img src={arrowNext} alt="go to next" />
            </span>
          </div>
          <div className="slideshow__count">
            {/* the counter give the position of the currentImage compared with the length of the array */}
            {currentIndex + 1}/{nbOfPictures}
          </div>
        </div>
      )}
    </div>
  )
}
Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
} // The props pictures is required for the Slideshow component

export default Slideshow
