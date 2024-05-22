import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import about from '../assets/about.jpg'
import '../styles/about.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import menu from '../assets/menu.svg';
import incrediants from '../assets/incrediants.svg';
import cook from '../assets/cook.svg';
import time from '../assets/time.jpg'
import Footer from './Footer';
function About() {
  return (
    <>
   <div className='aboutbg'>
 <Container fluid> 
      <Row className='aboutrow1'>
        <Col lg="6" ><img src={about} alt='about' className='aboutimg' /></Col>
        <Col lg="6" className='aboutrow2'> 
        <div className='aboutcontent'>
        <h4>About Us </h4>
        <h1>We invite you to
           visit our restaurant
        </h1>
        <p>Assumenda possimus eaque illo iste, autem. Porro eveniet, 
          autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? 
         Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
         repudiandae dolorem, beatae dolorum, praesentiu</p>
         </div>
         <button className='read'>Read more</button>
         <FaFacebookF  className='icons'/>
         <FaInstagram className='icons' />
         <FaTwitter  className='icons' />
         <FaYoutube  className='icons'/>
        </Col>
        <hr className='underline' />
        <div className='feature-content'>
            <h5>Features</h5>
            <h1>Why people Choose US?</h1>
            <p>Porro eveniet, autem ipsam vitae consequatur!</p>
            <Row>
                <Col lg="4">
                    <div className='receipe-card'>
                    <img src={menu} alt='menu' style={{ height: '80px' }} />
                         <h1>Menu for every taste</h1>
                         <p>Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className='receipe-card'>
                      <img src={incrediants} alt='incrediants' style={{ height: '80px' }} />
                      <h1>Always fresh ingredients</h1>
                      <p>Assumenda possimus eaque illo iste, autem. Porro eveniet autem</p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className='receipe-card'>
                       <img src={cook} alt='cook' style={{ height: '80px' }} />
                       <h1>Experienced chefs</h1>
                       <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                    </div>
                </Col>
                <hr className='underline' />
            </Row>
        </div>
     
      <div className='time-content'>
           <Row>
            <Col lg="9">
                <div className='time-img'>
                    <h4>ABOUT US</h4>
                    <h1>Working hours</h1>
                    <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                    <button className='reserve-btn'>Reservation</button>
                    <span  style={{ fontSize:'24px', cursor:'pointer' }}>ContactUs</span>
                 </div>
            </Col>
            <Col lg="3">
                <div className='time-schedule'>
                      <h5>SUNDAY TO TUESDAY</h5>
                      <div className='time-center'>
                      <h2>09 : 00</h2>
                      <h2>22 : 00</h2>
                      </div>
                      <h5>FRIDAY TO SATURDAY</h5>
                      <div className='time-center'>
                      <h2>11 : 00</h2>
                      <h2>9 : 00</h2>
                      </div>
                 </div>
                
            </Col>
           </Row>
           <hr className='underline' />
      </div>
      <div className='vistors-section'>
          <Row>
            <Col lg="3">
                <div className='vistors-flex'>
                <h1>200+</h1> 
                <p>VISITORS DAILY</p>
                </div>
            </Col>
            <Col lg="3">
            <div className='vistors-flex'>
                <h1>400+</h1> 
                <p>DELIVERIES MONTHLY</p>
                </div>
            </Col>
            <Col lg="3">
            <div className='vistors-flex'>
                <h1>100+</h1> 
                <p>POSITIVE FEEDBACK</p>
                </div>
            </Col>
            <Col lg="3">
            <div className='vistors-flex'>
                <h1>40+</h1> 
                <p>AWARDS AND HONORS</p>
                </div>
            </Col>
          </Row>
      </div>
      </Row>
      <Footer/>
    </Container>
    </div>
    </>
  );
}

export default About;
