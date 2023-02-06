// We define the notation component here

import emptyStar from '../../assets/stargrey.png'
import fullStar from '../../assets/starred.png'

function Rate({ rating }) {
  const fullStars = Array(5).fill({ fullStar })
  const emptyStars = Array(5).fill({ emptyStar })
  return (
    <div>
      {fullStars.slice(5 - rating).map((fullStar) => {
        return <span>{fullStar}</span>
      })}
      {emptyStars.slice(rating).map((emptyStar) => {
        return <span>{emptyStar}</span>
      })}
    </div>
  )
}

export default Rate
