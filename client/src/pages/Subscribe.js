import logo from '../assets/img/metanoia_newlogo.png';
import '../assets/css/Subscribe.css';

function Subscribe() {
  return (
    <>
      <div id="background" className="Subscribe">
        <h1 id="subscribeHeader">Subscribe to Our Newsletter!</h1>
        <div className="text-center mt-2 icont">
          <h4 id="description">
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
