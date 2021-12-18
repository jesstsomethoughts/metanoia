import React, { useState } from 'react';


import './blog.css'

// React components
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../img/metanoia_newlogo.png'



const BlogCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Card className="blogCardStyle" >
                <div class="cursorHover" onClick={handleShow}>
                    <Card.Img variant="top" src={props.img} />
                </div>
                <Card.Body >
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Text>
                        {props.about}
                    </Card.Text>
                    <Button size="sm" className="w-100" variant="outline-primary" onClick={handleShow}>Read More</Button>
                </Card.Body>
            </Card>

            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <div class="modalDiv">
                    <img class="modalImage" src={props.img} alt="" />
                    <Modal.Body>{props.article}</Modal.Body>
                </div>
            </Modal>
        </>
    )
}


const Blog = () => {

    // mongodb database hold these values
    // create fronent side to push values to mongodb database through specific username and password
    // call for json file everytime loads page 
    
    
    const blogList = [
        { img: logo, title: "Article 1 Title", about: "Article 1 About", article: "Article 1 Body Text" },
        { img: logo, title: "Article 2 Title", about: "Article 2 About", article: "Article 2 Body Text" },
        { img: logo, title: "Article 3 Title", about: "Article 3 About", article: "Article 3 Body Text" },
        { img: logo, title: "Article 4 Title", about: "Article 4 About", article: "Article 4 Body Text" },
        { img: logo, title: "Article 5 Title", about: "Article 5 About", article: "Article 5 Body Text" },
        { img: logo, title: "Article 6 Title", about: "Article 6 About", article: "Article 6 Body Text" },
        { img: logo, title: "Article 7 Title", about: "Article 7 About", article: "Article 7 Body Text" },
        { img: logo, title: "Article 8 Title", about: "Article 8 About", article: "Article 8 Body Text" },
        { img: logo, title: "Article 9 Title", about: "Article 9 About", article: "Article 9 Body Text" }
    ]

    return (
        <>
            <h1 class="header">Blog</h1>
            <Row xs={1} md={4} className="g-4 m-4">
                {blogList.map((value) => (
                    <Col>
                        <BlogCard img={value.img} title={value.title} about={value.about} article={value.article} />
                    </Col>
                ))}
            </Row>
        </>
    )
}


export default Blog;
