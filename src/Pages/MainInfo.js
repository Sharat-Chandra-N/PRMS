import React from 'react'
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import First from '../Images/istockphoto-1140300365-612x612.jpg'
import Second from '../Images/istockphoto-1227412970-612x612.jpg'
import './MainInfo.css'

function MainInfo() {
    return (
        <>
        <Container fluid className="main-info-section">
            <Row>
                <Col mb={12} md={6}>
                    <Card className="image-section-dark">
                        <img src={First} alt="First" style={{borderRadius:'10px', margin:'40px 0px'}} />
                    </Card>
                </Col>
                <Col mb={12} md={6}>
                    <Card className="info-section-dark" style={{verticalAlign : 'middle' , border:'none'}}>
                        <h3 style={{color:'red' , margin:'10px 0px'}}>Welcome</h3> 
                        <h1 style={{color:'white' , margin:'10px 0px'}}>
                            Excellent Solution For Your Business  
                        </h1>
                        <p style={{color:'white' , margin:'20px 0px'  , textAlign:'justify'}}>
                            A dynamic and fast growing HR Service company, renowned for result oriented approach in meeting customer’s business objectives. Our support always goes beyond the stated minimum guidelines. Clients, be it in IT, ITES or non-IT segments depend on Human Power for a successful business growth. We believe our services go beyond staffing and support to the fullest extent to ensure the success of our clients. Our approach and collective knowledge enables us to understand our client’s demand and provide appropriate, cost-effective solutions to their business need.<br />At <b>PR Management Solutions</b>, our recruitment mandate process begins with personal meeting with client, understanding client business and its needs.The process involves post recruitment follow-ups with both clients and candidates for feedback after each round of interview.
                        </p>
                        <Button color="primary" size="sm" variant="primary">
                            Read More
                        </Button>
                    </Card>
                </Col>``
            </Row>
            </Container>
            <Container fluid className="main-info-section-light">
            <Row>
                <Col mb={12} md={6}>
                    <Card className="info-section-light" style={{verticalAlign : 'middle' , border:'none' , margin:'40px 0px'}}>
                        <h3 style={{color:'red' , margin:'10px 0px'}}>Quality Policies</h3> 
                        <h1 style={{color:'#212529' , margin:'10px 0px'}}>
                            We'll Make Sure it Works For You  
                        </h1>
                        <p style={{color:'#212529' , margin:'20px 0px'  , textAlign:'justify'}}>
                            PR MANAGEMENT SOLUTIONS strives to improve effectiveness to provide and to focus on human resources management with abiding commitment to deliver ultimate quality services. Confidentiality We value and ensure complete security and confidentiality of client’s data and information.
                        </p>
                        <Button color="primary" size="sm" variant="danger">
                            Read More
                        </Button>
                    </Card>
                </Col>
                <Col mb={12} md={6}>
                    <Card className="image-section-light" style={{verticalAlign : 'middle' , border:'none'}}>
                        <img src={Second} alt="First" style={{borderRadius:'10px', margin:'40px 0px'}} />
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MainInfo
