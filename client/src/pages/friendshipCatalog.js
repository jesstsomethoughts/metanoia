import './Catalog.css';
import React from 'react';

// React components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// images and other components
import Banner from '../img/website-image.png';
import Placeholder from '../img/metanoia_newlogo.png';
import BookList from './olFriendshipBookList.json';


const BookCard = ({ cover, title, author, url}) => {
    const styleImg = {
        width: "100%",
        height: "40vh",
        objectFit: "cover"
      };

    return (
        <Col class="col-3">
            <Card className="book-card" onClick={()=>window.open(url,'_blank')}>
                <Card.Img style={styleImg} variant="top" src={cover} />
                <Card.Body  >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>By {author}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

function friendshipCatalog() {
    const loadBooks = (list) => {
        let ar = []
        for (let index=0; index<list.length; index++) {
            let i = list[index]               
            ar.push(<BookCard 
                    cover={"http://covers.openlibrary.org/b/olid/" + BookList[0]["bookIds"][i] + "-L.jpg"} 
                    title={BookList[1+i]["records"][`/books/${BookList[0]["bookIds"][i]}`].details.details.title} 
                    author={BookList[1+i]["records"][`/books/${BookList[0]["bookIds"][i]}`].details.details.authors[0].name}
                    url={BookList[1+i]["records"][`/books/${BookList[0]["bookIds"][i]}`].details.preview_url} 
                />)
        }
        return(ar)
    }
    
    return (
        <>
            {/* <div>
        <img alt="..." src={Banner} className="MainBanner" />
    </div> */}
            <h1 className="header">Friendship</h1>
            <div className="section">
            <h2 className="section-header">Grades Pre-K - 2</h2>
            <Row className="book-row" class="flew-row flex-nowrap">
                    {
                        loadBooks([0, 1, 2, 3])
                    }
            </Row>
            </div>
            <div className="section">
                <Row className="book-row" class="flew-row flex-nowrap">
                    {
                        loadBooks([4, 5, 6])
                    }
                </Row>
            </div>

        </>
    );
}

export default friendshipCatalog;
