import AboutMe from './AboutMe/AboutMe';
import AboutMeCard from './AboutMe/AboutMeCard';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';

const Welcome = () => {
  return (
    <div>
      <AboutMe />
      <AboutMeCard />
      <Portfolio />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
};

export default Welcome;
