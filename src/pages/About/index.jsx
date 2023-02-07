/* About us page component
 * It return the banner component and as many as useful Collapses according to the number of values there are in our data file*/

import imgAbtUs from '../../assets/images/kasa-about-us-valeurs.png' // the image used in the Banner component
import Banner from '../../components/Banner' // the component Banner
import Collapse from '../../components/Collapse' // the Collapse component used for each value (ie Fiabilité, Respect...)
import { about } from '../../datas/about' // datas that contain the title and the description of our different values used in the Collapse component

/* The About component returns a main section with a banner and a section with collapses div that explain each value of the firm */
function About() {
  return (
    <main className="about">
      <Banner className="about__banner" image={imgAbtUs} />
      <div className="about__section">
        {about.map(
          // Mapping of the about datas to return an array for each companies'value with its title, description and id to fill the fields of the Collapse component and the unique component key for each component of the same type rendered
          (item) => (
            // For each value we use a Collapse component to make it appear in the dom
            <Collapse
              title={item.title}
              description={item.description}
              key={item.id}
            />
          )
        )}
      </div>
    </main>
  )
}

export default About
