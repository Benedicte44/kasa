// our detailed product page component
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/SlideShow'
import { accomodationsList } from '../../datas/accomodationList'
import Collapse from '../../components/Collapse'
import Rate from '../../components/Rate'
import ErrorPage from '../Error'
import './_index.scss'

function AccomodationDetails() {
  const { id } = useParams()
  const targetedRenting = accomodationsList.find((renting) => renting.id === id)
  if (!targetedRenting) {
    return <ErrorPage />
  }
  return (
    <main>
      <Slideshow pictures={targetedRenting.pictures} />
      <section className="descriptif">
        <article className="resume">
          <div>
            <h1>{targetedRenting.title}</h1>
            <p className="locationRenting">{targetedRenting.location}</p>
            <div className="tagsContainer">
              {targetedRenting.tags.map((tag, index) => (
                <li className="tags" key={index}>
                  {tag}
                </li>
              ))}
            </div>
          </div>
          <div className="rentingInfoSupp">
            <div className="rentingOwner">
              <p>{targetedRenting.host.name}</p>
              <img
                src={targetedRenting.host.picture}
                alt="visage du propriétaire"
                className="ownerFace"
              />
            </div>
            <Rate ratings={targetedRenting.rating} className />
          </div>
        </article>
        <aside className="details">
          <Collapse
            title="Description"
            description={targetedRenting.description}
            className="detailsDesc"
            key={'Description' + targetedRenting.id}
          />
          <Collapse
            title="Equipements"
            description={targetedRenting.equipments.map((equipement, index) => (
              <p key={index} className="equipement__detail">
                {equipement}
              </p>
            ))}
            className="detailsEqu"
          />
        </aside>
      </section>
    </main>
  )
}

export default AccomodationDetails
