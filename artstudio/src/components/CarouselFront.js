import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';


const data = [
  {
   image: require('../images/inthegarden.png'), 
   caption:"Caption",
   description:"Description Here",
   link: "www.google.com"
   
  },
  {
    image:require('../images/wreckage.png'), 
    caption:"Caption",
    description:"Description Here",
    link: "www.google.com"
   },
   {
    image:require('../images/hank.png'), 
    caption:"This game is scary",
    description:"Hank will feed your kitty and kill Zombies for you",
    link: "www.google.com"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;