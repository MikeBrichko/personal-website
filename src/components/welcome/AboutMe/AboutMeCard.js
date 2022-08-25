const AboutMeCard = () => {
  return (
    <section style={{ backgroundColor: "#f8f9fa"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="card border-0 rounded shadow"
              style={{
                zIndex: 1,
                marginTop: '-70px'
              }}>
              <div className="card-body">
                <div className="row align-items-center gy-3">
                  <div className="col-lg-4 col-md-4 text-md-start">
                    <div className="bg-light p-1 rounded">
                        <h6 className="title mb-2">Personal Details</h6>
                        <div className="bor-bottom mt-2 mb-2"></div>
                        <p className="text-muted mb-2 mt-3 font-14">
                          <a className="text-black text-decoration-none">Email:</a> w.mike.brichko@gmail.com
                        </p>
                        <p className="text-muted mb-2 font-14">
                          <a className="text-black text-decoration-none">Languages:</a> English, French, Russian
                        </p>
                        <p className="text-muted mb-0 font-14">
                          <a className="text-black text-decoration-none">Nationality:</a> Russian
                        </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div className="row align-items-end">
                      <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                        <h4 className="heading me-2">
                          I Am{' '}
                          <span
                            className="element text-primary"
                            data-elements="Web Designer, Web Developer, Photographer"></span>
                          <span id="typed" className="text-primary">
                            Web Design
                          </span>
                          <span className="typed-cursor">|</span>
                        </h4>
                        <p className="text-light-muted mt-2">
                          Logical and results-driven Web Developer dedicated to building and
                          optimizing user-focused websites for customers with various business
                          needs. Analytical problem solver with calm and focused demeanor.
                          Committed to high standards of user experience, usability and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeCard;
