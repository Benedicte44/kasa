// We define here the banner component
import './_index.scss'

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner of Kasa" className="bannerImg" />
      <div className="bannerText">{text ? <h1>{text}</h1> : null}</div>
    </div>
  )
}

export default Banner
