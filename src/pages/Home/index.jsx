/* Home page component
 * It returns a banner and cards with our products main info*/
import Banner from '../../components/Banner' // the Banner component to display a welcome picture and a slogan
import CardsLayout from '../../components/Cards' // The CardsLayout component to display a resume on each renting available in our data list
import bannerImage from '../../assets/images/landscape-kasa-welcome.png' // the picture used in the banner
import { accomodationsList } from '../../datas/accomodationList' // the datas on our rentings

function Home() {
  const image = bannerImage
  const text = 'Chez vous, partout et ailleurs'

  return (
    <main className="homepage">
      <Banner image={image} text={text} />
      <CardsLayout dataList={accomodationsList} />
    </main>
  )
}

export default Home
