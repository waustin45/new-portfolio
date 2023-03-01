import React from 'react'
import Card from './Card'
function Portfolio(props) {
    
return (
    <div className='portfolio-container'>
        {
            props.projects.map((info, index) => {
                return  (
                <Card key={index}
                    project={info.project}
                    desc={info.desc}
                    tech={info.tech}
                    repo={info.repo}
                    link={info.link}
                    img={info.img}
                />
                )
            })
        }
    </div>
)
}

export default Portfolio