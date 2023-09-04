import React from 'react'
import yahoo_1 from '../assets/png/yahoo-1.webp'
import yahoo_2 from '../assets/png/yahoo-2.webp'
import yahoo_3 from '../assets/png/yahoo-3.webp'
import yahoo_4 from '../assets/png/yahoo-4.webp'
import yahoo_5 from '../assets/png/yahoo-5.webp'
import yahoo_6 from '../assets/png/yahoo-6.webp'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Featured_on = () => {
    return (
        <div className=' overflow-hidden' id='featured'>
            <Container className='pb-5'>
                <h1 className=' ff_konexy fw_400 fs_48px pb-4'>Featured on</h1>
                <div className='py-5 slider-container'>
                    <div className='d-flex align-items-center justify-content-between slider'>

                        <Link><img className='w-150' src={yahoo_1} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_2} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_3} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_4} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_5} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_6} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_1} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_2} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_3} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_4} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_5} alt="yahoo" /></Link>

                        <Link><img className='w-150' src={yahoo_6} alt="yahoo" /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured_on