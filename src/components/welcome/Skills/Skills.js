import android from '../../../assets/android.svg';
import angular from '../../../assets/Angular.svg';
import Skill from './Skill';

const Skills = () => {
    return (
        <section>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 text-center mb-3">
                                <div className="container-title">
                                    <div className="titles">
                                        <h4 className="title title-line text-capitalize mb-4">Work Expertise</h4>
                                    </div>
                                    <p className="text-light-muted mx-auto width-max mb-0">{`Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Skill 
                                image={android}
                                percentage={80}
                            />
                            <Skill 
                                image={angular}
                                percentage={60}
                            />
                            <Skill 
                                image={android}
                                percentage={80}
                            />
                            <Skill 
                                image={angular}
                                percentage={70}
                            />
                        </div>
                        <div className="row">
                            <Skill 
                                image={angular}
                                percentage={34}
                            />
                            <Skill 
                                image={android}
                                percentage={50}
                            />
                            <Skill 
                                image={angular}
                                percentage={56}
                            />
                            <Skill 
                                image={android}
                                percentage={80}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;