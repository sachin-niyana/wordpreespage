import React from 'react'
import men_2 from '../assets/png/men-2.webp'

const Preloder = () => {
    return (
        <div>
            <div className='min-vh-100  d-flex justify-content-center align-items-center bg-color position-fixed w-100 top-0 w-100 z-5 start-0' id='preloader'>
                <div><img className='w-200px loader' src={men_2} alt="logo" /></div>
            </div>
        </div>
    )
}

export default Preloder