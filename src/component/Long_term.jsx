import React from 'react'
import propy_1 from '../assets/png/propy-1.webp'
import propy_2 from '../assets/png/propy-2.webp'
import propy_3 from '../assets/png/propy-3.webp'
import propy_4 from '../assets/png/propy-4.webp'
import propy_5 from '../assets/png/propy-5.webp'
import propy_6 from '../assets/png/propy-6.webp'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Long_term = () => {
    return (
        <div className=' py-5 position-relative z-2 bg-white overflow-hidden' id='long_term'>
            <Container className='pb-5'>
                <h1 className=' ff_konexy fw_400 fs_48px max-w-550 fc_black pb-4'>Long Term WordPress Partner</h1>
                <p className=' ff_gilroy fw_400 fs_16 fc_gray max-w-690'>Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                <div className='py-5 slider-container'>
                    <div className='d-flex align-items-center justify-content-between slider'>

                        <Link><img className='w-140' src={propy_1} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_2} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_3} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_4} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_5} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_6} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_1} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_2} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_3} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_4} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_5} alt="propy" /></Link>

                        <Link><img className='w-140' src={propy_6} alt="propy" /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Long_term