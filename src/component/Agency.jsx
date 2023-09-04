import React from 'react'
import play from '../assets/png/play.webp'
import grup from '../assets/png/grup-img.webp'
import line from '../assets/png/line.webp'
import circle from '../assets/png/circle.webp'
import search from '../assets/png/search.webp'
import shadow_2 from '../assets/png/shadow-2.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Agency = () => {
    return (
        <div className='bg-black py-5 mt-5' id='agency'>
            <div className=" position-relative overflow-hidden">
                <div className='shadow-3'></div>
                <img src={shadow_2} alt="shadow" className='shadow-4' />
                <Container className='mt-79 mt-5 pt-4 position-relative z-3 overflow-hidden'>
                    <Row className='heropadding'>
                        <Col lg={6} className='order-1 order-lg-0 d-flex flex-column justify-content-lg-center' data-aos="fade-left" data-aos-duration="1500">
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <img className='line' src={line} alt="line" />
                                <h1 className=' ff_konexy fc_white fw_400 fs_72 mb-0 pb-2 mt-3 mt-lg-0'>WordPress Development Agency</h1>
                            </div>
                            <h4 className=' ff_gilroy  fc_white  fs_24 fw_700 mb-0 py-22'>for Enterprise + Friendly Team</h4>
                            <p className=' ff_gilroy  fc_gray fs_sm fw_400 mb-0  pb-1'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                            <div className='d-sm-flex align-items-center justify-content-center justify-content-lg-start gap-5'>
                                <button className=' ff_gilroy fs_16  fc_white fw_600 btn-1 accordion mb-0 me-34 mt-4'>Get Started</button>
                                <div className='d-flex align-items-center gap-2 mt-4'>
                                    <img src={play} alt="play" />
                                    <p className=' ff_gilroy  fc_white fs_sm fw_400 mb-0  ml-14 mb-0'>What is Vipe? (1min)</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={6} className='order-0 order-lg-1 d-flex align-items-center align-items-xxl-start' data-aos="fade-left" data-aos-duration="1500">
                            <div className=' position-relative'>

                                <div className='mb-0'>
                                    <img className='w-100 position-relative z-2' src={grup} alt="grup" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-5 py-sm-5 py-md-5 py-lg-6'>
                        <Col lg={6}>
                            <h2 className='mb-0  ff_konexy fw_400  fc_white fs_36'>Tell us more....</h2>
                            <p className='pt-3 mb-0  ff_gilroy fs_ fw_400  fc_white  pe-3'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. <span className=''>Magna vel orci sem neque fringilla et lectus laoreet.</span></p>
                        </Col>
                        <Col lg={6}>
                            <div className='seacrh d-flex justify-content-between mb-0'>
                                <input type="email" placeholder='What do you need assistance with?' className='w-100 me-3' />
                                <img src={search} alt="search" />
                            </div>
                            <div className="d-flex pt-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <img src={circle} alt="circle" /><span className=' ff_gilroy fs_sm fw_400  fc_white ps-2 mb-0'>or send us an inquire?	</span>
                                </div>
                                <p className=' ff_gilroy fs_sm fw_400  fc_white mb-0'>Learn more about...</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Agency