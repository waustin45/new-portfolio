import React from 'react'

function Card(props) {
    console.log(props, "second props")
return (
    <div className='card-div'>
        <img src={props.img} alt='img'/>
        <div>
            <h2>{props.project}</h2>
            <p>{props.desc}</p>
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