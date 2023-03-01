import React from 'react'
import HeadShot from '../assets/Profile-pic.jpg'

function AboutMe() {
return (
    <div className='about-container'>
        <img src={HeadShot} alt="hero-img"/>
        <div>
            <h2>About Me</h2>
            <p>
                Seeking a web developer position where I can apply my
                attention to detail, teamwork skills,
                and advanced knowledge in the user side
                as well as the server side of JavaScript to create
                an efficient and enjoyable experience for any web user.
            </p>
        </div>
        <div>
            <h2>
                Skills
            </h2>
            <ul>
                <li>React</li>
                <li>Node.JS</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li>Express.JS</li>
                <li>Tailwind CSS</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>MYSQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
        
    </div>
)
}

export default AboutMe