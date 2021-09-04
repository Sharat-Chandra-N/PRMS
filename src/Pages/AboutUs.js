import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin} from 'react-icons/ai'
import {ImAddressBook} from 'react-icons/im'
import './AboutUs.css'

function AboutUs() {
    return (
        <Container fluid className="about-us-section">
            <Row>
                <Col>
                    <h2>About Us</h2>
                </Col>
            </Row>
            <Row>
                <Col mb={12} lg={6} style={{verticalAlign:"middle"}}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.318770201638!2d77.5341391!3d12.961651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f43fdf6ef73%3A0xe24112637a83b52d!2sPR%20Management%20Solutions!5e0!3m2!1sen!2sin!4v1629296495154!5m2!1sen!2sin" 
                        width="600" 
                        height="250"
                        allowfullscreen=""
                        loading="lazy"
                        title="ABC"
                    ></iframe>
                </Col>
                <Col mb={12} lg = {6} style={{verticalAlign:"middle"}}>
                    <div style={{margin : "10px 0px"}}>
                        <AiOutlineMail /> <a href="mailto:inofo@prms.co.in"> : info@prms.co.in</a><br/>
                    </div>
                    <div style={{margin : "10px 0px"}}>
                        <AiOutlinePhone /> <a href="tel: +919880299342"> : +919880299342</a><br/>
                    </div>
                    <div style={{margin : "10px 0px"}}>
                        <AiOutlineLinkedin /><a href="#/"> : Prasanth</a> <br />
                    </div>
                    <div style={{margin : "10px 0px"}}>
                        <ImAddressBook /><a href="#/"> : #217, 1st floor, 7 'A' Main Road, 4th Cross Hamapinagar, Vijaynagar 2nd Stage, Bangalore : 560104</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs
