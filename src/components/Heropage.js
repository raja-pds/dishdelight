import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/homenavbar.css';

function Heropage() {
  return (
    <>
    <div className="hero-image">
        <div className='img-content'>
           <h3 >Hello, New friend</h3>
           <h1>Visit to our Online shop</h1>
           <p>Explore our extensive selection online and visit our shop today!</p>
           <Button className='find-us'>Find Us</Button>
        </div>
    </div>
    </>
  );
}

export default Heropage;
