import React from 'react'
import Hamburger from '../assets/icons8-hamburger-32.png'
function NavBar() {
    const nameLogo = "Austin Howell"
    function switchClass (event) {
        const section = document.querySelector('.about-me-sec')
        const section1 = document.querySelector('.portfolio-me-sec')
        const section2 = document.querySelector('.contact-me-sec')
        const btn = document.querySelector('.ham-div')
        const navItems = document.querySelector('.nav-items')
        if (event.target.id === "about-btn") {
            section.classList.add('visible')
            section.classList.remove('hidden')
            section1.classList.remove('visible')
            section2.classList.remove('visible')
            section1.classList.add('hidden')
            section2.classList.add('hidden')
        } else if (event.target.id === "portfolio-btn") {
            section1.classList.add('visible')
            section1.classList.remove('hidden')
            section.classList.remove('visible')
            section2.classList.remove('visible')
            section.classList.add('hidden')
            section2.classList.add('hidden')
        } else if (event.target.id === "contact-btn") {
            section2.classList.add('visible')
            section2.classList.remove('hidden')
            section.classList.remove('visible')
            section1.classList.remove('visible')
            section.classList.add('hidden')
            section1.classList.add('hidden')
        }
        btn.setAttribute('data-hidden', "false")
        btn.classList.remove('rotate')
        navItems.classList.remove('active') 
    }
    function toggleMenu () {
        const btn = document.querySelector('.ham-div')
        const navItems = document.querySelector('.nav-items')
        const btnAtt = btn.getAttribute('data-hidden')
        console.log(btnAtt)
        if (btnAtt === "false") {
            navItems.classList.add('active') 
            btn.setAttribute('data-hidden', "true")
            btn.classList.add('rotate')
        } else {
            navItems.classList.remove('active') 
            btn.setAttribute('data-hidden', "false")
            btn.classList.remove('rotate')
        }
    }
    function downloadResume () {
        fetch("../assets/W-Austin-Howell.pdf").then(response => {
            response.blob().then(info => {
            const URL = window.URL.createObjectURL(info)
            let alink = document.createElement('a');
            alink.href = URL;
            alink.target= "_blank"
            alink.download = 'W-Austin-Howell.pdf';
            alink.click();
            console.log(response)
        })
        })
    }
return (
    <nav>
        <div className="nav-div">
            <h1>{nameLogo}</h1>
            <button onClick={toggleMenu} data-hidden= "false" className='ham-div'>
                <img src={Hamburger} alt="hamburger"/>
            </button>
            <div className='nav-items'>
                <button onClick={switchClass} id="about-btn" className='btn nav-btn'>About Me</button>
                <button onClick={switchClass} id="portfolio-btn" className='btn nav-btn'>Portfolio</button>
                <button onClick={switchClass} id="contact-btn" className='btn nav-btn'>Contact Me</button>
                <a href='../assets/W-Austin-Howell.pdf'  className='btn resume-btn nav-btn' download="resume">Resume</a>
            </div>
        </div>
    </nav>
)
}

export default NavBar