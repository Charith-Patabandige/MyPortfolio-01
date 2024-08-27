import styles from './HeroStyles.module.css';
import darkme from '../../assets/me-darkbg.png';
import whiteme from '../../assets/me-whitebg.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import behancelight from '../../assets/behance-light.svg';
import behancedark from '../../assets/behance-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const heroImg = theme === 'light' ? darkme : whiteme;
  const themeIcon = theme === 'light' ? sun : moon;
  const behanceIcon = theme === 'light' ? behancelight : behancedark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Charith
          <br />
          Silva
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://github.com/Charith-Patabandige" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/charith-patabandige/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.behance.net/Charith-Patabandige" target="_blank">
            <img src={behanceIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        I am Undergraduate at Sabaragamuwa University of Sri Lanka and currently pursing a B.Sc (Hons) Computing & Information Systems Degree.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
