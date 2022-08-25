import PropTypes from 'prop-types';

const WorkExperienceCard = ({ jobTitle, company, years, description }) => {
  return (
    <div className="timeline mt-4">
      <div className="timeline-content">
        <div className="timeline-icon text-primary">
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
            className="feather feather-feather fea icon-md">
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
        </div>
        <h3 className="title mb-0">{ jobTitle }</h3>
        <small className="company"> { company } </small>
        <span className="badge skill-badge education-badge badge-light"> { years }</span>
        <p className="description text-light-muted mt-2">
          { description }
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceCard;

WorkExperienceCard.propTypes = {
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  years: PropTypes.string,
  description: PropTypes.string,
};
