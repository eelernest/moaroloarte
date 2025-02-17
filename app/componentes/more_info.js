'use client'

import './styles_components/more-info.css'

export default function More_info({title,description}){
    return(
        <div className='more-info-container'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}