import React from "react";

function Sections() {
  return (
    <div className="container marketing SectionsContainer">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="/nutrition.jpeg"
            alt="nutrition"
            className="img-fluid rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">NUTRITION</h2>
          <p>
            Proper nutrition fuels the body and mind, promoting overall health
            and well-being for individuals and communities alike.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="/sustainabilityImg.png"
            alt="sustainability"
            className="img-fluid rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">SUSTAINABILITY</h2>
          <p>
            Sustainable practices ensure that we preserve resources, protect the
            environment, and create a healthier future for generations to come.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="/communityImg.jpg"
            alt="community"
            className="img-fluid rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">COMMUNITY</h2>
          <p>
            Strong, connected communities foster collaboration, support, and
            shared resources, empowering people to thrive together.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <img
            src="/educationImg.jpg"
            alt="education"
            className="img-fluid rounded"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <h2 className="fw-normal">EDUCATION</h2>
          <p>
            Education is the foundation for progress, providing individuals with
            the knowledge and skills to shape a brighter, more equitable future
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sections;
