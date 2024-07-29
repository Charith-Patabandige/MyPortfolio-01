import React from 'react'
import './Hero.css'
import profile_picture from '../../assets/profile-image-1.png'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
import behance_icon from '../../assets/behance.png'

const Hero = () => {
  return (
    <div className='hero container'>

        <div className="hero-content">
            <h1>I'm Charith</h1>
            <h2>Full Stack Developer</h2>
            <p>I am Undergraduate at Sabaragamuwa University of Sri Lanka and currently pursing a B.Sc (Hons) Computing & Information Systems Degree. I am a fast learner who adapts quickly to change and eager to learn new methods and technologies, and work as an effective team member. Intend to work smart for the advancement of any project that I'm working on.</p>

            <a href="https://drive.google.com/file/d/1r_e7_blat_8wewO48DDLGBrHcbB8cef3/view?usp=drive_link" download="Charith CV"><button className='btn'>Resume</button></a>

            <div className='social-links'>
                <a href='https://github.com/charith98patabandige'> <img src={github_icon} alt='' /> </a>
                <a href='https://www.linkedin.com/in/charith-patabandige'> <img src={linkedin_icon} alt='' /> </a>
                <a href='https://github.com/charith98patabandige'> <img src={behance_icon} alt='' /> </a>

            </div>

        </div>
        <div className='profile-pic'>
          <img src={profile_picture} alt='' />
        </div>
    </div>
  )
}

export default Hero