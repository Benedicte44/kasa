// Our home page component
import Banner from '../../components/Banner'
import bannerImage from '../../assets/landscape-kasa-welcome.png'
import CardsLayout from '../../components/Cards'
import { accomodationsList } from '../../datas/accomodationList'

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
