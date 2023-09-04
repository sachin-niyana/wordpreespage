
import React from 'react'
import top_arrow from '../assets/png/top-arrow.webp'
import { useState } from 'react';

const Back_to_top = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })

    const [visibility, setVisibility] = React.useState(false)
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='my_container'>
                <span
                    onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="back"
                    ref={scrollTop}
                ><img className='w-100 arrow d-flex top-arrow' src={top_arrow} alt="topUp" /></span>
            </div>
        </>
    )
}

export default Back_to_top