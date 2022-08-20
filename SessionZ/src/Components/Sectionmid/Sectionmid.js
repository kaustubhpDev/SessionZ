import "./Sectionmid.css";
import test from "./test.png";
function Sectionmid() {
  return (
    <div className="section-mid">
      <div className="section-mid-container">
        <div className="section-message-box">
          <h2 className="section-message-text">
            Education,art,counselling,fitness .... host sessions online with
            SessionZ
          </h2>
        </div>
        <div className="section-demo-container">
          <div className="section-demo-image">
            <img src={test} alt="test" className="section-image"></img>
          </div>
          <div className="section-demo-text">
            <h1 className="section-demo-heading">
              All in one place to <br></br> conduct your sessions
            </h1>
            <p className="section-demo-paragraph">
              Organising group sessions is a pain. Inviting people <br />
              scheduling time and keeping track of payments is really <br />
              hard.
            </p>
            <p className="section-demo-paragraph">
              SessionZ makes hosting paid group sessions easier <br />
              than ever before. All you have to is describe your
              <br /> event ,choose time and accept online payments <br /> from
              your clients
            </p>
          </div>
        </div>
      </div>
      <hr class="solid"></hr>
    </div>
  );
}

export default Sectionmid;
