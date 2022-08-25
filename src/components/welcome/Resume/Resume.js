import WorkExperienceCard from './WorkExperienceCard';

const Resume = () => {
  return (
    <section className="section" style={{ backgroundColor: "#f8f9fa"}}>
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="work-content mt-4">
              <h2 className="text-capitalize">Work Participation</h2>
              <p className="mb-0 text-light-muted">
                {
                `I'm a Full Stack Developer. 
                Experienced with all stages of the development cycle for dynamic web projects.`
                }
              </p>
              <a className="btn btn btn-primary rounded mt-4 pt-2">
                See More <i className="mdi mdi-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="main-timeline">
                <WorkExperienceCard 
                  jobTitle={"Frontend Developer"} 
                  company={"Sherpa-Solutions"} 
                  years={"2022-current"} 
                  description={`
                    Developed customized ERP for security guards.
                    Increased by tenfold speed of calendar API calls.
                    Lead multiple refactor efforts to increase code
                    quality, testability and reusability.
                    Increased test coverage from 20% to 60%.
                    Using React, React Native, Laravel, MySQL
                  `} 
                />
                <WorkExperienceCard 
                  jobTitle={"Full Stack Developer (Web & Mobile)"} 
                  company={"XGuard"} 
                  years={"2021-2022"} 
                  description={`
                    Developed customized ERP for security guards.
                    Increased by tenfold speed of calendar API calls.
                    Lead multiple refactor efforts to increase code
                    quality, testability and reusability.
                    Increased test coverage from 20% to 60%.
                    Using React, React Native, Laravel, MySQL
                  `} 
                />
                <WorkExperienceCard 
                  jobTitle={"Software Developer Intern"} 
                  company={"Diabsolut"} 
                  years={"Summer 2019"} 
                  description={`
                    Developed customized integration solution through
                    constant communication with Diabsolut client to
                    create concise requirements. Using WSO2, Salesforce, ClickSoftware, Apex.`
                  } 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
