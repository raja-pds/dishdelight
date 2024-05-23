import React from 'react';
import '../styles/about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import about from '../assets/about.jpg';
import menu from '../assets/menu.svg';
import incrediants from '../assets/incrediants.svg';
import cook from '../assets/cook.svg';

const Example = () => {
  return (
    <div>
      <div className='backimg'>
        <Container fluid>
          <div className='center'>
            <div className='bg-white'>
              <div className='p-lg-4 p-3 p-md-5'>
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <div>
                      <img src={about} alt='about' className='w-100' />
                    </div>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <div className='aboutcontent'>
                      <h4>About Us</h4>
                      <h1>We invite you to visit our restaurant</h1>
                      <p>Assumenda possimus eaque illo iste, autem. Porro eveniet, autem ipsam vitae amet repellat repudiandae tenetur, quod corrupti consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae repudiandae dolorem, beatae dolorum, praesentiu</p>
                      <button className='read'>Read more</button>
                      <div className="social-icons">
                        <FaFacebookF className='icons' />
                        <FaInstagram className='icons' />
                        <FaTwitter className='icons' />
                        <FaYoutube className='icons' />
                      </div>
                    </div>
                  </Col>
                </Row>
               
                <div className='feature-content p-lg-5 p-5 p-md-3'>
                  <h5>Features</h5>
                  <h1>Why people Choose Us?</h1>
                  <p>Porro eveniet, autem ipsam vitae consequatur!</p>
                  <Row>
                    <Col lg={4} md={12} sm={12}>
                      <div className='receipe-card p-lg-5 p-md-5'>
                        <img src={menu} alt='menu' className='feature-icon' />
                        <h1>Menu for every taste Dishes</h1>
                        <p>Dolor sit amet, consectetur adipisicing elit et molestias possimus</p>
                      </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                      <div className='receipe-card p-lg-5 p-md-5'>
                        <img src={incrediants} alt='incrediants' className='feature-icon' />
                        <h1>Always fresh ingredients</h1>
                        <p>Assumenda possimus eaque illo iste, autem. Porro eveniet autem</p>
                      </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                      <div className='receipe-card p-lg-5 p-md-5'>
                        <img src={cook} alt='cook' className='feature-icon' />
                        <h1>Experienced chefs Master</h1>
                        <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat</p>
                      </div>
                    </Col>
                  </Row>
                
                  <div className='time-content'>
                    <Row>
                      <Col lg={8} md={12} sm={12}>
                        <div className='time-img'>
                          <div className='p-lg-5 p-md-5 p-5' >
                            <h4>ABOUT US</h4>
                            <h1>Working hours</h1>
                            <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                            <button className='reserve-btn'>Reservation</button>
                            <span className='contact-us m-lg-4 m-md-4 '>Contact Us</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} md={12} sm={12}>
                        <div className='p-lg-4 p-md-4 p-4'>
                          <h5>SUNDAY TO TUESDAY</h5>
                          <div>
                            <h2>09:00</h2>
                            <h2>22:00</h2>
                          </div>
                          <h5>FRIDAY TO SATURDAY</h5>
                          <div>
                            <h2>11:00</h2>
                            <h2>21:00</h2>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                 
                  <div className='visitors-section'>
                    <Row>
                      <Col lg={3} md={6} sm={12}>
                        <div className='p-lg-5 p-md-5 p-3 '>
                          <h1>200+</h1>
                          <p>VISITORS DAILY</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={12}>
                        <div className='p-lg-5 p-md-5 p-3'> 
                          <h1>400+</h1>
                          <p>DELIVERIES MONTHLY</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={12}>
                        <div className='p-lg-5 p-md-5 p-3'>
                          <h1>100+</h1>
                          <p>POSITIVE FEEDBACK</p>
                        </div>
                      </Col>
                      <Col lg={3} md={6} sm={12}>
                        <div className='p-lg-5 p-md-5 p-3'>
                          <h1>40+</h1>
                          <p>AWARDS AND HONORS</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Example;
