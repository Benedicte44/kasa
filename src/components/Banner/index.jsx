/* The banner component that returns an image and a title h1 (if it exists) in the dom
 *To use this component we have to provide the image and text props*/
import PropTypes from 'prop-types'

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner of Kasa" className="banner__img" />
      <div className="banner__text">{text ? <h1>{text}</h1> : null}</div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
} // The props image is required for the banner

export default Banner
