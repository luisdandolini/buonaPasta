import './Slide.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const fadeImages = [
    {
      url: '../images/nhoque.jpg',
    },
    {
      url: '../images/pizza.jpg',
    },
    {
      url: '../images/pasta.jpg',
    },
  ];

  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} alt="Produtos Buona Pasta"/>
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;