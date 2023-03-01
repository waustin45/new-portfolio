import React from 'react'
import Github from '../assets/icons8-github.svg'
import Linkedin from '../assets/icons8-linkedin-circled.svg'
import Twitter from '../assets/icons8-twitter.svg'
function Footer() {
return (
    <div className='footer-container'>
        <ul>
            <li><a href="https://github.com/waustin45" target="_blank" rel="noreferrer"><img className='footer-img' src={Github} alt="github"/></a></li>
            <li><a href="https://www.linkedin.com/in/austin-howell-69016b121/" target="_blank" rel="noreferrer"><img className='footer-img' src={Linkedin} alt="linkedin"/></a></li>
            <li><a href="https://twitter.com/wahowell_" target="_blank" rel="noreferrer"><img className='footer-img' src={Twitter} alt="twitter"/></a></li>
            
        </ul>
    </div>
)
}

export default Footer