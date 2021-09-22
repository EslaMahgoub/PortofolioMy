import { Layout } from "../../ui/organisms/Layout/Layout"
import './AboutPage.scss'
import Photo1 from './resources/1.jpg'
import Photo2 from './resources/2.jpg'
import Photo3 from './resources/3.jpg'
import Photo4 from './resources/4.jpg'
import Photo5 from './resources/5.jpg'
export const AboutPage = (): React.ReactElement => {
  return (
    <Layout>
      <div className="about">
        <div className="gallery">
          <img className="gallery__img" src={Photo1} alt="Photo1" />
          <div className="gallery__photos">
          <img className="gallery__photos__img" src={Photo2} alt="Photo2"/>
          <img className="gallery__photos__img" src={Photo3} alt="Photo3"/>
          <img className="gallery__photos__img" src={Photo4} alt="Photo4"/>
          <img className="gallery__photos__img" src={Photo5} alt="Photo5"/>
          </div>
        </div>

        <div className="about-me">

        <div className="about-me__p">
        I am Eslam Mahgoub a <span className="bold color-black">Software Engineer</span> from Egypt, Living in Kraków
        </div>
        
        <div className="about-me__p">
          Ruby On Rails and React Developer
        </div>

        <div className="about-me__p">
          You can get in touch with me via this email <span className="bold color-black underline">Eslamkhaledtawfik@gmail.com</span>
        </div>
        
        </div>

      </div>
    </Layout>
  )
}
