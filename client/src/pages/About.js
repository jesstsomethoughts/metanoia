import '../assets/css/About.css';

// additional images/files
import logo from '../assets/img/metanoia_newlogo.png';
import AsthaImage from '../assets/img/astha.JPG';
import JessicaImage from '../assets/img/jessica.png';
import TanveeImage from '../assets/img/tanvee.png';
import CassidyImage from '../assets/img/cassidy.png';
import BrettImage from '../assets/img/brett.png';
import JoyceImage from '../assets/img/joyce.jpg';

// react components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <>
      <div className="About">
        <h2 className="about-para">About Us</h2>
        <p className="about-para">
          Metanoia is an upcoming EdTech startup that seeks to put social issues
          at the forefront of children’s lives through our virtual interactive
          library. Our website bridges the communication gap between
          parents/teachers and students by tailoring personalized book
          recommendations that foster meaningful discussions. K-5 students will
          be able to enrich their knowledge whenever and wherever they go!
        </p>

        {/* Team Intros */}
        <Container className="team-pictures">
          <Row>
            <Col>
              <h2>Our Team</h2>
            </Col>
          </Row>
          <Row className="first-row">
            <Col sm>
              <img src={AsthaImage} className="team-image" />
              <h5>Astha Rai</h5>
              <h6>Co-Founder</h6>
            </Col>
            <Col sm>
              <img src={JessicaImage} className="team-image" />
              <h5>Jessica Li</h5>
              <h6>Co-Founder</h6>
            </Col>
            <Col sm>
              <img src={TanveeImage} className="team-image" />
              <h5>Tanvee Joshi</h5>
              <h6>Co-Founder</h6>
            </Col>
          </Row>

          <Row>
            <Col>
              <img src={CassidyImage} className="team-image" />
              <h5>Cassidy Cheng</h5>
              <h6>Head of BD/Marketing</h6>
            </Col>
            <Col>
              <img src={JoyceImage} className="team-image" />
              <h5>Joyce Mok</h5>
              <h6>Head of UI/UX</h6>
            </Col>
            <Col>
              <img src={BrettImage} className="team-image" />
              <h5>Brett Woltz</h5>
              <h6>Head of Software + Web Development</h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
