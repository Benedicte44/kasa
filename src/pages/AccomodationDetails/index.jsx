// our detailed product page component
import { useParams } from 'react-router-dom'
import Slideshow from '../../components/SlideShow'
import { accomodationsList } from '../../datas/accomodationList'

function AccomodationDetails() {
  const { id } = useParams()
  const targetedRenting = accomodationsList.find((renting) => renting.id === id)
  return <Slideshow pictures={targetedRenting.pictures} />
}

export default AccomodationDetails
