import React from 'react'

function Card(props) {


return (
    <div className='card-div'>
        <img className='img' src={props.img} alt='img'/>
        <div>
            <h2>{props.project}</h2>
            <p className='abs-p'>{props.desc}</p>
            <div className='card-a-div'>
                <a href={props.link}>Live Site</a>
                <a href={props.repo}>Repo</a>
            </div>
            
            <ul>
                {props.tech.map((info, index) => {
                    return <li key={index}>{info}</li>
                })}
            </ul>
        </div>
    </div>
)
}

export default Card