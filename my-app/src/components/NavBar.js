import React from 'react'

function NavBar() {
    const nameLogo = "Austin Howell"
    function switchClass (event) {
        const section = document.querySelector('.about-me-sec')
        const section1 = document.querySelector('.portfolio-me-sec')
        const section2 = document.querySelector('.contact-me-sec')
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
    }
return (
    <nav>
        <div className="nav-div">
            <h1>{nameLogo}</h1>
            <div className='nav-items'>
                <button onClick={switchClass} id="about-btn" className='btn '>About Me</button>
                <button onClick={switchClass} id="portfolio-btn" className='btn '>Portfolio</button>
                <button onClick={switchClass} id="contact-btn" className='btn '>Contact Me</button>
                <button className='btn resume-btn'>Resume</button>
            </div>
        </div>
    </nav>
)
}

export default NavBar