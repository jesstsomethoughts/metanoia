import logo from '../img/metanoia_newlogo.png';
import './Subscribe.css';

function Subscribe() {
  return (
    <>
    <div className="Subscribe">
      <h1>Subscribe to Our Newsletter</h1>
      <div className="text-center mt-2 icont">
        <h4>
          Fill out the form below to receive personalized book
          recommendations!
        </h4>
        <iframe
          className="responsive-iframe"
          src="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_1AFALlunx5Un8Rn"
          width="700"
          height="520"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
    </>
  );
}

export default Subscribe;
