import backgroundImage from '../../../assets/home-shape.png';
import picture from '../../../assets/home.png';

const AboutMe = () => {
  return (
    <div
      className="position-relative pb-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: '170px'
      }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 align-items-center">
            <div className="mt-4 py--50">
              <h1 className="text-black">Here I am Mike Brichko</h1>
              <p className="pera-title text-light-muted">
                Obviously Im a Web Designer. Web Developer with over 3 years of experience.
                Experienced with all stages of the development
              </p>
              <div className="hero-btn mt-4 pt-2">
                <a className="btn btn-primary rounded me-2 mb-2">Hire Me</a>
                <a className="btn btn-outline-primary rounded mb-2">
                  Download CV{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-download fea icon-sm">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div>
              <img src={picture} alt="" className="img-fluid mx-auto position-relative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
