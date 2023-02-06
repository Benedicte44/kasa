// Our about us page component
import Banner from '../../components/Banner'
import imgAbtUs from '../../assets/kasa-about-us-valeurs.png'
import Collapse from '../../components/Collapse'
import { about } from '../../datas/about'
import './_index.scss'

function About() {
  return (
    <main className="aboutPage">
      <Banner className="aboutBanner" image={imgAbtUs} />
      <div className="aboutSection">
        {about.map((item) => (
          <Collapse
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </main>
  )
}

export default About
