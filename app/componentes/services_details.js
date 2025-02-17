'use client'

import './styles_components/services_details.css'


export default function Services_details({ico,img,list1,list2,list3,list4,list5,list6,list7,list8}) {
    return (
        <div className='details-container'>
            <div className='img-details-container'>
                <img src={img} />
            </div>
            <div className='details-description'>
                <img src={ico} />
                <h2>SERVICIOS</h2>
                <div className='description'>
                    <ul>
                        {list1}
                        {list2}
                        {list3}
                        {list4}
                        {list5}
                        {list6}
                        {list7}
                        {list8}
                    </ul>
                </div>
            </div>
        </div>
    )
}