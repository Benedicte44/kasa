// The component for the cards display
import { Link } from 'react-router-dom'
import './_index.scss'

function CardsLayout({ dataList }) {
  return (
    <div className="cardsContainer">
      {dataList.map((objectTargeted) => {
        const { id, title, cover, tags } = objectTargeted
        return (
          <div className="card" key={id}>
            <Link to={'/accomodation/' + id}>
              <img className="card__img" src={cover} alt={tags} />
              <h2>{title}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CardsLayout
