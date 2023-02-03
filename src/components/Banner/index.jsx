// We define here the banner component
import './_index.scss'

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner of Kasa" className="bannerImg" />
      <div className="bannerText">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Banner
