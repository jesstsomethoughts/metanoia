import logo from '../img/metanoia_newlogo.png';
import './About.css';

function About() {
  return (
    <>
    <div className="About">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id = "main-description">
          Metanoia is an upcoming EdTech startup that seeks to put
          social issues at the forefront of children’s lives
          through our virtual interactive library. Our website
          bridges the communication gap between parents/teachers
          and students by tailoring personalized book
          recommendations that foster meaningful discussions. K-5
          students will be able to enrich their knowledge whenever
          and wherever they go!
        </p>
      </header>
    </div>
    </>
  );
}

export default About;
