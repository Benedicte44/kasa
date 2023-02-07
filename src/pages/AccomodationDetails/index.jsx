/* Detailed product page component
 * It returns a slideshow showing the renting pictures, and details on the renting such as the name, owner, renting, equipments...*/
import { useParams } from 'react-router-dom' // We get the hook useparams to take the product id sent in the url
import Slideshow from '../../components/SlideShow' // The slideshow component to navigate on the product's pictures
import Collapse from '../../components/Collapse' // The Collapse component to let the user chose if he wants to see or not the product's details
import Rate from '../../components/Rate' // The Rate commponent to reveals the stars allocated to the product
import ErrorPage from '../Error' // The ErrorPage component if the id of the product doesn't exist
import { accomodationsList } from '../../datas/accomodationList' // the datas product file

function AccomodationDetails() {
  const { id } = useParams() // We get the id of the product in the page url
  const targetedRenting = accomodationsList.find((renting) => renting.id === id) // We select in our datas file the product matching with the id contained in the url
  if (!targetedRenting) {
    // if the product doesn't exist the error page component is returned
    return <ErrorPage />
  }
  return (
    <main>
      <Slideshow pictures={targetedRenting.pictures} />
      <section className="descriptif">
        <article className="descriptif__resume">
          {/* The section for the global datas on the product (name, location, tags, owner, rating) */}
          <div>
            {/* The section for the name, location, tags */}
            <h1>{targetedRenting.title}</h1>
            <p className="descriptif__resume__location">
              {targetedRenting.location}
            </p>
            <div className="descriptif__resume__tags-container">
              {targetedRenting.tags.map((tag, index) => (
                <li
                  className="descriptif__resume__tags-container__tags"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </div>
          </div>
          <div className="descriptif__resume__info-supp">
            {/* The section for the owner and rating */}
            <div className="descriptif__resume__info-supp-owner">
              <p>{targetedRenting.host.name}</p>
              <img
                src={targetedRenting.host.picture}
                alt="visage du propriétaire"
                className="descriptif__resume__info-supp-owner-face"
              />
            </div>
            <Rate ratings={targetedRenting.rating} />
          </div>
        </article>
        <aside className="descriptif__details">
          {/* The section for the more detailed datas on the product : main description and equipements */}
          <Collapse
            title="Description"
            description={targetedRenting.description}
            key={'Description' + targetedRenting.id}
          />
          <Collapse
            title="Equipements"
            description={targetedRenting.equipments.map((equipement, index) => (
              <p key={index}>{equipement}</p>
            ))}
          />
        </aside>
      </section>
    </main>
  )
}

export default AccomodationDetails
