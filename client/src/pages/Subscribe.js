import logo from '../assets/img/metanoia_newlogo.png';
import PageTitle from "../components/PageTitle";
import "../assets/css/Subscribe.css";

function Subscribe() {
  return (
    <>
      <div className="Subscribe">
        <PageTitle
          titleText={"Subscribe to Our Newsletter!"}
          subtitleText={
            "Fill out the form below to receive personalized book recommendations!"
          }
        />
        <div className="text-center mt-2 icont">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://qfreeaccountssjc1.az1.qualtrics.com/jfe/form/SV_1AFALlunx5Un8Rn"
              width="800"
              height="430"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
