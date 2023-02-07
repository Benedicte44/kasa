/* Rating commponent used in the accomodation details component
 * It returns a container with 5 stars colored in red or grey according to the rating of the product contained in the datas array on products
 * To use this component we have to provide the rating props */

import stargrey from '../../assets/images/stargrey.png' // the image for grey star meaning the point is not given
import starred from '../../assets/images/starred.svg' // the image for red star meaning the point is given

function Rate({ ratings }) {
  const fullStars = Array(5).fill(
    <img src={starred} alt="étoile notation rouge" />
  ) // we create an array with 5 red stars
  const emptyStars = Array(5).fill(
    <img src={stargrey} alt="étoile notation grise" />
  ) // we create an array with 5 grey stars
  return (
    <div className="rating">
      {fullStars.slice(5 - ratings).map((fullStar, i) => {
        /* We keep the useful red stars with the operation which cuts on our array the number of red stars unuseful => 5(initial number of red stars) minus the rating of the product */
        return <p key={i}>{fullStar} </p>
      })}
      {emptyStars.slice(ratings).map((emptyStar, i) => {
        /* We keep the useful empty stars with the operation which cuts on our array the number of empty stars unuseful which equals the rating of the product */
        return <p key={i}>{emptyStar}</p>
      })}
    </div>
  )
}

export default Rate
