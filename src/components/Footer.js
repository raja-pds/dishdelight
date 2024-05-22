import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import footerlogo from '../assets/footerlogo.png'
import '../styles/footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer(){
  return (
    <>
     <div className='footer-align'>
        <Container fluid>
        <Row>
            <Col lg="6">
                <div className='footer-section'>
               <img src={footerlogo} alt='footerlogo' className='footer-img'/>
               </div>
            </Col>
            <Col lg="6" className="footer-icons-container">
                <div className='footer-icons'>
                  <FaFacebookF  className='iconss'/>
                  <FaInstagram className='iconss' />
                  <FaTwitter  className='iconss' />
                  <FaYoutube  className='iconss'/>
                </div>
            </Col>
            <hr className='underline' />
        </Row>
        </Container>
     </div>
    </>
  )
}

export default Footer;
