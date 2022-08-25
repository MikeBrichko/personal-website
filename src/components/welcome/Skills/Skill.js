import PropTypes from 'prop-types';

const Skill = ({ image, percentage }) => {
    return (
        <div className="col-lg-3 col-6 mt-4 pt-2">
            <div className="card explore-feature border-0 text-center bg-white p-3" style={{ alignItems: 'center' }}>
                <div className="card-body p-0">
                    <div className="skill-icon rounded-circle shadow-lg" style={{ 
                        width: "80px",
                        height: "80px",
                        lineHeight: "80px"
                    }}>
                        <img src={image}  alt="" className="image img-fluid mx-auto" />
                    </div>
                    <span className="badge skill-badge badge-light" style={{ marginRight: '40px' }}>{ percentage }%</span>
                </div>
            </div>
        </div>
    );
}

export default Skill;

Skill.propTypes = {
    image: PropTypes.string,
    percentage: PropTypes.string,
  };