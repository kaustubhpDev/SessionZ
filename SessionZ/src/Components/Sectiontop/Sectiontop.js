import sectiontop from "./sectiontop.png";
import "./Sectiontop.css";
function Sectiontop() {
  return (
    <div className="section">
      <div className="section-container">
        <div className="section-text">
          <div className="section-text-child">
            <h1 className="section-tagline ">
              The easiest way to host
              <br />
              paid group sessions !
            </h1>
          </div>
          <div className="section-text-child">
            <p className="section-text-content ">
              Efficiently create links for group sesssions to accept payments
              <br />
              from your clients online on SessionZ !
            </p>
          </div>
          <div className="section-text-child">
            <button className="create-button ">Create Account 🚀</button>
          </div>
        </div>
        <div className="section-illustration">
          <img
            src={sectiontop}
            alt="sectiontop"
            className="section-illustration-image"
          ></img>
        </div>
      </div>
      <hr class="solid"></hr>
    </div>
  );
}

export default Sectiontop;
