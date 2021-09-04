import React from "react";
import "./Testimonial.css";
import { Card,Container,Row,Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FirstImg from '../Images/user1.png'
import SecondImg from '../Images/user2.png'
import ThirdImg from '../Images/user3.png'
import FourthImage from '../Images/user4.png'

export default function Testimonial() {

  const data = [
      {
          image : FirstImg,
          name : "FirstName",
          Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        image : SecondImg,
        name : "SecondName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },
    {
        image : ThirdImg,
        name : "ThirdName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },
    {
        image : FourthImage,
        name : "FourthName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
   ]

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

   const renderSlides = () =>
    data.map((item,index) => (
        <Card key={index} className="bg-dark text-white" card-block>
            <div className="card-image-section">
                <Card.Img ml-auto src={item.image} style={{width:"100px" , alignItems:"center"}} alt="Card image" className="card-image" />
            </div>
            <Card.Title>
                {item.name}
            </Card.Title>
            <Card.Text>
                {item.Content}
            </Card.Text>
        </Card>
    ));

  return (
    <div className="testimonial-section">
        <Container className="testimonial-container">
            <Row>
                <Col>
                    <h2>Our Happy Clients</h2>
                </Col>
            </Row>
            <Row ml-auto mr-auto>
                <Col md={12}>
                    <Slider {...settings} dots={true}>{renderSlides()}</Slider>
                </Col>
            </Row>
        </Container>
    </div>
  );
}