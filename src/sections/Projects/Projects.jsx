import styles from './ProjectsStyles.module.css';
import academicity from '../../assets/academicity.png';
import carzone from '../../assets/carzone.png';
import eduversa from '../../assets/eduversa.png';
import chatapp from '../../assets/chatapp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={academicity}
          link="https://academicity.netlify.app/"
          h3="Academicity"
          p="React"
          // p="University Website"
        />
        <ProjectCard
          src={carzone}
          link="https://carzonelk.netlify.app/"
          h3="CarZoneLK"
          p="Next.Js | Tailwind CSS"
          // p="Car Selling Web App"
        />
        <ProjectCard
          src={eduversa}
          link="https://eduversa-f2b8a.web.app/admin"
          h3="EduVersa"
          p="React | Fire Base"
          // p="All in one LMS"
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/Charith-Patabandige/Chat-App"
          h3="ChatApp"
          p="React | Fire Base"
          // p="Messaging App"
        />
      </div>
    </section>
    
  );
}

export default Projects;
