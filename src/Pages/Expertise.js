import React,{useState} from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Expertise() {

    const [content, setContent] = useState(false)
    const [itemId, setItemId] = useState(0)

    const data = [
      {
        id : 1,  
        name : "FirstName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        id : 2,
        name : "SecondName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        id : 3,
        name : "ThirdName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      },
      {
        id : 4,
        name : "FourthName",
        Content : "Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
     ]

    return (

        <Container>
            <Row>
                <Col>
                    <h2>Our Expertise</h2>
                </Col>
            </Row>
            <Row>
            {
                data.map(item => (
                    <Col mb={12} md={6} lg={3}>
                            <Card style={{margin:"10px 0px"}}>
                            <h4>{item.name} 
                                <Button variant="outline-danger"
                                    style={{margin:"0px 20px"}}
                                    onClick={() => {
                                        setItemId(item.id)
                                        setContent(() => !content)
                                    }}
                                >
                                {"More"}
                                </Button>
                            </h4>
                            {content && (item.id === itemId) && item.Content}
                            {() => setItemId(0)}
                        </Card>
                    </Col>   
                ))
            }
            </Row>
        </Container>
    )
}

export default Expertise
