/* Cards display component used in the home page
 * It returns a section with as much as cards needed to expose each object of the data array, in the dom
 * To use this component we have to provide a datalist props*/

import { Link } from 'react-router-dom' // The Link component of react

function CardsLayout({ dataList }) {
  return (
    <section className="cards-container">
      {dataList.map(
        // Mapping of the datas to return an array for each object
        (objectTargeted) => {
          const { id, title, cover, tags } = objectTargeted // Dismantling of each object to create id, title, cover, tags variables
          return (
            // The id of the objectTargeted is put in the element to have a unic key value
            <div className="cards-container__card" key={id}>
              {/* Creation of a Link in the dom that wraps the card's elements, its url takes the id data of the objectTargeted */}
              <Link to={'/accomodation/' + id}>
                <img
                  className="cards-container__card-img"
                  src={cover}
                  alt={tags}
                />
                <h2>{title}</h2>
              </Link>
            </div>
          )
        }
      )}
    </section>
  )
}

export default CardsLayout
