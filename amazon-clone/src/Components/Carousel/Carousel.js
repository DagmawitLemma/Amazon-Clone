import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from "./img/data"
import Classes from "./Carousel.module.css"

function CarouselEffect() {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
        {
            img.map((imgItemLink) => {
                return <img src={imgItemLink} />
            })
        }
      </Carousel>
      <div className={Classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect
