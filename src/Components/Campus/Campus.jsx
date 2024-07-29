import React from 'react'
import './Campus.css'
import list_icon from '../../assets/checked.png'



const Campus = () => {
  return (
    <div className='skills' id='campus'>
      <div className="skill-category">
        <h3>Frontend Technologys</h3>
        <div className='item'><img src={list_icon} alt='' /><p>HTML</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>CSS</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>JavaScript</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>React</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Next.JS</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Tailwind CSS</p></div>
      </div>

      <div className="skill-category">
        <h3>Backend Technologys</h3>
        <div className='item'><img src={list_icon} alt='' /><p>ExpresJS</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MongoDB</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Spring boot</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Fire Base</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MySQL</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Tailwind CSS</p></div>
      </div>

      <div className="skill-category">
        <h3>Programing Language</h3>
        <div className='item'><img src={list_icon} alt='' /><p>ExpresJS</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MongoDB</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Spring boot</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Fire Base</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MySQL</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Tailwind CSS</p></div>
      </div>

      <div className="skill-category">
      <h3>Tools & Flatforms</h3>
        <div className='item'><img src={list_icon} alt='' /><p>ExpresJS</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MongoDB</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Spring boot</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Fire Base</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>MySQL</p></div>
        <div className='item'><img src={list_icon} alt='' /><p>Tailwind CSS</p></div>
      </div>


    </div>
  )
}

export default Campus
