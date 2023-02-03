// Our about us page component
import Banner from '../../components/Banner'
import imgAbtUs from '../../assets/kasa-about-us-valeurs.svg'
import Collapse from '../../components/Collapse'
import { about } from '../../datas/about'
import './_index.scss'

function About() {
  return (
    <main>
      <Banner image={imgAbtUs} />
      <div className="aboutSection">
        {about.map((item) => (
          <Collapse title={item.title} description={item.description} />
        ))}
      </div>
    </main>
  )
}

export default About
