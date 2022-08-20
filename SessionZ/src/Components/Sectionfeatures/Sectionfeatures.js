import "./Sectionfeatures.css";
function Sectionfeatures() {
  return (
    <div className="section-features">
      <div className=" section-features-header">
        <h1 className="section-features-heading">Features</h1>
      </div>
      <div className="section-features-cards">
        <div className="section-features-card">
          <i class="fa-solid fa-link"></i>
          <h2> Session Links</h2>
          <p>
            Create a session and then get a link from which
            <br /> your clients can pay and get the video call link
          </p>
        </div>
        <div className="section-features-card">
          <i class="fa-solid fa-chart-simple"></i>
          <h2> Marketplace</h2>
          <p>
            Your created sessions will be displayed on our
            <br /> marketplace so you can reach more people
          </p>
        </div>
        <div className="section-features-card">
          <i class="fa-solid fa-credit-card"></i>
          <h2> Payments</h2>
          <p>
            We support major methods like UPI,Netbanking <br />
            and Credit Cards to collect your payments.
          </p>
        </div>
      </div>
      <hr class="solid"></hr>
    </div>
  );
}

export default Sectionfeatures;
