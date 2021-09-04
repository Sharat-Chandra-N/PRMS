import React from 'react'
import { Card, Container, Row, Col } from "react-bootstrap";
import './Services.css'
import SpinnerImage from '../Images/SpinnerImage.png'
import FocusArea from '../Images/FocusArea.jpg'
import FuncArea from '../Images/FuncAreas.png'

function Services() {
    return (
        <Container className="main-container-section" id="#scrollspyHeading1">
            <Row className="main-heading">
                <Col xs={12}>
                    <h2 id="#scrollspyHeading1">Our Services</h2>
                </Col>
            </Row>
            <Row>
                <Col className="single-card" mb={12} md={6} lg={4}>
                    <Card style={{ width: '18rem' }} bg="light" text="black">
                    <Card.Img variant="top" src={SpinnerImage} />
                        <Card.Body>
                        <Card.Title>The Brief Process Structure</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Permanent Placement</li>
                                    <li>Temporary Staffing</li>    
                                    <li>Executive search</li>    
                                    <li>Head Hunters</li>    
                                    <li>Manpower Sourcing</li>    
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={12} md={6} lg={4}>
                    <Card className="single-card" style={{ width: '18rem' }} bg="secondary" text="white">
                    <Card.Img variant="top" src={FocusArea} />
                        <Card.Body>
                        <Card.Title>Focus Areas</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Automotive</li>
                                    <li>Banking and Financial</li>
                                    <li>Biotech</li>
                                    <li>BPO and KPO</li>
                                    <li>Engineering</li>
                                    <li>FMCG</li>
                                    <li>Insurance</li>
                                    <li>Infrastructure</li>
                                    <li>Information Technology (IT)</li>
                                    <li>Pharma</li>
                                    <li>Retail Industry</li>
                                    <li>Telecom</li>
                                    <li>Wellness Industry</li> 
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col mb={12} md={6} lg={4}>
                    <Card className="single-card" style={{ width: '18rem' }} bg="light" text="black">
                    <Card.Img variant="top" src={FuncArea} />
                        <Card.Body>
                        <Card.Title>Functional Areas</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Top Management</li>
                                    <li>Software/Network Professionals</li>
                                    <li>Finance and Accounting</li>
                                    <li>Administration and Personnel</li>
                                    <li>Human Resources</li>
                                    {/* <li>Sales and Marketing</li>
                                    <li>Customer Service</li>
                                    <li>Logistics, Supply Chain Management and Procurement</li>
                                    <li>Research Analyst</li>
                                    <li>Legal and Compliance</li>
                                    <li>Front Office, Secretarial and Support</li> */}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Services
