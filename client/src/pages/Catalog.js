import '../assets/css/Catalog.css'
import React from 'react'

// React components
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// images and other components
import Banner from '../assets/img/website-image-edit.png'
import Placeholder from '../assets/img/metanoia_newlogo.png'
import BookList from '../data/olBookList.json'

const BookCard = ({ cover, title, author, url }) => {
  const styleImg = {
    width: '100%',
    height: '40vh',
    objectFit: 'cover',
  }

  return (
    <Col class='col-3'>
      <Card className='book-card' onClick={() => window.open(url, '_blank')}>
        <Card.Img style={styleImg} variant='top' src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>By {author}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

function Catalog() {
  //<img src='http://covers.openlibrary.org/b/olid/" + BookList[0]["bookIds"][0] + "-M.jpg'>

  // console.log(BookList[1]["records"][`/books/${BookList[0]["bookIds"][0]}`].details.details.covers[0]) //cover id
  // console.log(BookList[1]["records"][`/books/${BookList[0]["bookIds"][0]}`].details.details.title) //title
  // console.log(BookList[1]["records"][`/books/${BookList[0]["bookIds"][0]}`].details.details.authors[0].name) //author name

  const loadBooks = (list) => {
    let ar = []
    for (let index = 0; index < list.length; index++) {
      let i = list[index]
      ar.push(
        <BookCard
          cover={
            'http://covers.openlibrary.org/b/olid/' +
            BookList[0]['bookIds'][i] +
            '-L.jpg'
          }
          title={
            BookList[1 + i]['records'][`/books/${BookList[0]['bookIds'][i]}`]
              .details.details.title
          }
          author={
            BookList[1 + i]['records'][`/books/${BookList[0]['bookIds'][i]}`]
              .details.details.authors[0].name
          }
          url={
            BookList[1 + i]['records'][`/books/${BookList[0]['bookIds'][i]}`]
              .details.preview_url
          }
        />
      )
    }
    return ar
  }

  return (
    <>
      {/* <div>
        <img alt="..." src={Banner} className="MainBanner" />
    </div> */}
      <div className="main_banner">
      <h1 className="header">Miscellaneous</h1>
    </div>
      <div className='section'>
        <h2 className='section-header'>Grades K-2</h2>
        <Row className='book-row' class='flew-row flex-nowrap'>
          {loadBooks([0, 3, 4, 6])}
        </Row>
      </div>
      <div className='section'>
        <h2 className='section-header'>Grades 3-5</h2>
        <Row className='book-row' class='flew-row flex-nowrap'>
          {loadBooks([1, 2, 8, 9])}
        </Row>
      </div>
      <div className='section'>
        <h2 className='section-header'>Grades 6-8</h2>
        <Row className='book-row' class='flew-row flex-nowrap'>
          {loadBooks([5, 7])}
        </Row>
      </div>

      <nav aria-label='...'>
        <ul class='pagination'>
          <li class='page-item'>
            <a class='page-link the-diversity' href='/diversityCatalog'>
              Diversity
            </a>
          </li>
          <li class='page-item active  '>
            <a class='page-link the-miscell' href='/miscellanousCatalog'>
              Miscellaneous
            </a>
          </li>
          <li class='page-item'>
            <a class='page-link the-friendship' href='/friendshipCatalog'>
              Friendship
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Catalog
