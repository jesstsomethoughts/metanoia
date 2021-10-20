import './Catalog.css';

// React components
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// images and other components
import Banner from '../img/website-image.png';
import Placeholder from '../img/metanoia_newlogo.png';

function Catalog() {
    return (
    <>
    {/* <div>
        <img alt="..." src={Banner} className="MainBanner" />
    </div> */}
    <h1 className="header">Diversity</h1>
    <div className="section">
        <h2 className="section-header">Grades K-2</h2>
        <Row className="book-row" class="flew-row flex-nowrap">
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
    <div className="section">
        <h2 className="section-header">Grades 3-5</h2>
        <Row className="book-row" class="flew-row flex-nowrap">
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
    <div className="section">
        <h2 className="section-header">Grades 6-8</h2>
        <Row className="book-row" class="flew-row flex-nowrap">
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col class="col-3">
                <Card className="book-card">
                    <Card.Img variant="top" src={Placeholder} />
                    <Card.Body>
                        <Card.Title>The Giving Tree</Card.Title>
                        <Card.Text>By Jessica Li</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>

    </>
    );
}

export default Catalog;