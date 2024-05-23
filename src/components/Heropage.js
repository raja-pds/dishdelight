import React from 'react';
 import '../styles/homenavbar.css';
import Carousel from 'react-bootstrap/Carousel';

import { Button } from 'react-bootstrap';
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
// const images = [
//   require('../assets/bg1.jpg'), // Adjust paths based on where your images are stored
//   require('../assets/bg2.jpg'),
//   require('../assets/bg3.jpg')
// ];

function Heropage() {
  return (
    <>   
       <Carousel>
      <Carousel.Item interval={1000}>
        <img src={bg1} className='w-100'></img>
        <Carousel.Caption>
        <div className='img-content'>
           <h3 >Hello, New friend</h3>
           <h1>Visit to our Online shop</h1>
           <p>Explore our extensive selection online and visit our shop today!</p>
           <Button className='find-us'>Find Us</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={bg2} className='w-100'></img>
        <Carousel.Caption>
        <div className='img-content'>
           <h3 >Hello, New friend</h3>
           <h1>Visit to our Online shop</h1>
           <p>Explore our extensive selection online and visit our shop today!</p>
           <Button className='find-us'>Find Us</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={bg3} className='w-100'></img>
        <Carousel.Caption>
        <div className='img-content'>
           <h3 >Hello, New friend</h3>
           <h1>Visit to our Online shop</h1>
           <p>Explore our extensive selection online and visit our shop today!</p>
           <Button className='find-us'>Find Us</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Heropage;
















    /* <div className="hero-image">
        <div className='img-content'>
           <h3 >Hello, New friend</h3>
           <h1>Visit to our Online shop</h1>
           <p>Explore our extensive selection online and visit our shop today!</p>
           <Button className='find-us'>Find Us</Button>
        </div>
    </div> */

  
// }

// export default Heropage;
