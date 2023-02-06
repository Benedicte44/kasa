// We define the notation component here

import stargrey from '../../assets/stargrey.png'
import starred from '../../assets/starred.svg'
import './_index.scss'

function Rate({ ratings }) {
  const fullStars = Array(5).fill(
    <img src={starred} alt="étoile notation rouge" className="star" />
  ) // we create an array with 5 red stars
  const emptyStars = Array(5).fill(
    <img src={stargrey} alt="étoile notation grise" className="star" />
  ) // we create an array with 5 grey stars
  return (
    <div className="rating__stars">
      {fullStars.slice(5 - ratings).map((fullStar, i) => {
        /* We keep the useful red stars on our array with the operation which cuts on our array the number of red stars unuseful => 5(initial number of red stars) minus the rating of the product */
        return <p key={i}>{fullStar} </p>
      })}
      {emptyStars.slice(ratings).map((emptyStar, i) => {
        /* We keep the useful empty stars on our array with the operation which cuts on our array the number of empty stars unuseful which equals the rating of the product */
        return <p key={i}>{emptyStar}</p>
      })}
    </div>
  )
}

export default Rate
