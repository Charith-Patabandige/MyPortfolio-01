import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import project_1_img from '../../assets/academicity-project.png'
import github_icon from '../../assets/github.png'
import web_icon from '../../assets/web.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="project-info">
                            <div className='project-img'>
                                <img src={project_1_img} alt="" />
                            </div>

                            <div className='project-header'>
                                <h2>Academicity</h2>
                                <h4>ReactJs | Individual</h4>
                                <p>Portal for university information, admissions, academics, events.</p>
                            </div>

                            <div className='project-links'>
                                <a href='https://github.com/charith98patabandige'> <img src={github_icon} alt='' /> </a>
                                <a href='https://www.linkedin.com/in/charith-patabandige'> <img src={web_icon} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="project-info">
                            <div className='project-img'>
                                <img src={project_1_img} alt="" />
                            </div>

                            <div className='project-header'>
                                <h2>Edusity</h2>
                                <h4>ReactJs | Individual</h4>
                                <p>Portal for university information, admissions, academics, events.</p>
                            </div>

                            <div className='project-links'>
                                <a href='https://github.com/charith98patabandige'> <img src={github_icon} alt='' /> </a>
                                <a href='https://www.linkedin.com/in/charith-patabandige'> <img src={web_icon} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="project-info">
                            <div className='project-img'>
                                <img src={project_1_img} alt="" />
                            </div>

                            <div className='project-header'>
                                <h2>Edusity</h2>
                                <h4>ReactJs | Individual</h4>
                                <p>Portal for university information, admissions, academics, events.</p>
                            </div>

                            <div className='project-links'>
                                <a href='https://github.com/charith98patabandige'> <img src={github_icon} alt='' /> </a>
                                <a href='https://www.linkedin.com/in/charith-patabandige'> <img src={web_icon} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                <div className="slide">
                        <div className="project-info">
                            <div className='project-img'>
                                <img src={project_1_img} alt="" />
                            </div>

                            <div className='project-header'>
                                <h2>Edusity</h2>
                                <h4>ReactJs | Individual</h4>
                                <p>Portal for university information, admissions, academics, events.</p>
                            </div>

                            <div className='project-links'>
                                <a href='https://github.com/charith98patabandige'> <img src={github_icon} alt='' /> </a>
                                <a href='https://www.linkedin.com/in/charith-patabandige'> <img src={web_icon} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                </li>



            </ul>
        </div>
    </div>
  )
}

export default Testimonials
