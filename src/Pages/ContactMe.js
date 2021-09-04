import React,{useState} from 'react'
import './ContactMe.css'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from 'axios'

function ContactMe() {

    const [data, setData] = useState({
        name : "",
        email : "",
        contact : "",
        subject : "",
        description : "",
        randomNumber : ""
    })

    const [msg, setMsg] = useState("")
    const [post, setPost] = useState("")

    const validateData = () => {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(data.name === "" || data.name === undefined || data.contact === "" || data.contact === undefined || data.email === "" || data.email === undefined || data.subject ==="" || data.subject === undefined){
            setMsg("Please Fill all required Fields")
            return false
        }

        if(!data.email.match(validRegex)){
            setMsg("Email is Not in correct Format")
            return false
        }
        return true
    }

    const postHandler = () => {
        var tempdata = {
            service_id: 'contact_form',
            template_id: 'template_mewdm4j',
            user_id: 'user_A33dJ3ayCmNzZlE8vuxSO',
            template_params: {
                'name': data.name,
                'email': data.email,
                'contact' : data.contact,
                'subject' : data.subject,
                'description' : data.description
            }
        };
        // axios.post('https://api.emailjs.com/api/v1.0/email/send', tempdata)
        setPost("Your Response is recorded")
        setData({
            name : "",
            email : "",
            contact : "",
            subject : "",
            description : "",
            randomNumber : ""
        })
        setTimeout(() => {
            setPost("")
        },2000)
    }

    const submitHandler = () => {
        const validate = validateData()
        if(validate){
            setData({
                ...data,
                randomNumber : (Math.random() * 1000000 | 0)
            })
            postHandler()
        }
    }

    return (
        <div>
            <Container className="contact-me-container">
                <Row>
                    <Col mb={6} md={3}>
                        <h3  id="#scrollspyHeading1">Contact Us</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col mb={6} md={3}>
                        <h6 style = {{color : "red"}}>{msg}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col mb={6} md={3}>
                        <h6 style = {{color : "green"}}>{post}</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className='contact-form-section'>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Name *
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Name" value={data.name} onChange = {(e) => {
                                    setData({
                                        ...data,
                                        name : e.target.value
                                    })
                                    setMsg("")
                                    }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Email *
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="email" placeholder="Email" value={data.email} onChange = {(e) => {
                                    setData({
                                        ...data,
                                        email : e.target.value
                                    })
                                    setMsg("")
                                    }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumber">
                                <Form.Label column sm="2">
                                    Contact Number *
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="number" placeholder="Contact Number" value={data.contact} onChange = {(e) => {
                                        setData({
                                        ...data,
                                        contact : e.target.value
                                    })
                                    setMsg("")
                                    }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubject">
                                <Form.Label column sm="2">
                                    Subject *
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control type="text" placeholder="Subject" value={data.subject} onChange = {(e) => {
                                    setData({
                                        ...data,
                                        subject : e.target.value
                                    })
                                    setMsg("")
                                    }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextDesc">
                                <Form.Label column sm="2">
                                    Please describe your Experience
                                </Form.Label>
                                <Col sm="4">
                                    <Form.Control as="textarea" rows={5} value={data.description} onChange = {(e) => setData({
                                        ...data,
                                        description : e.target.value
                                    })} />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" onClick={() => 
                                submitHandler()
                                }>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactMe
