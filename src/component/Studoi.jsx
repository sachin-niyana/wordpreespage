import React from 'react'
import ok from '../assets/png/ok.webp'
import ok_2 from '../assets/png/ok-2.webp'
import women from '../assets/png/women.webp'
import shadow from '../assets/png/shadow-1.webp'
import shadow_2 from '../assets/png/shadow-2.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Studoi = () => {
    return (
        <div className=' overflow-hidden bg-black py-5' id='studoi'>
            <Container>
                <Row className='d-flex justify-content-center mb-5 pb-5'>
                    <Col lg={4} md={6} className='d-flex justify-content-center text-lg-start text-center' data-aos="fade-left" data-aos-duration="1500">
                        <div className='mb-0'>
                            <h3 className='ff_konexy fs_39 fw_400 fc_white mt-5'>All Vipe Studio WordPress services	include:</h3>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1500">
                        <div className='mb-0 mt-5'>
                            <h4 className='ff_gilroy fw_600 fs_24 fc_white mb-2'>By Industry</h4>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Lorem in elementum pellentesque</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Molestie cursus praesent mi</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Leo sed viverra cras</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Laoreet feugiat ut at</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Risus aliquam molestie viverra</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Diam enim pulvinar velit</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='d-flex justify-content-center' data-aos="flip-right" data-aos-duration="1500">
                        <div className='mb-0 mt-5'>
                            <h4 className='ff_gilroy fw_600 fs_24 fc_white mb-2'>By Services</h4>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Accumsan, dui a semper</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Interdum malesuada vulputate neque</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Nullam non a, morbi</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Arcu morbi leo eu</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Viverra venenatis, in ornare</p>
                            </div>
                            <div className='d-flex align-items-center gap-2 pt-3'>
                                <img src={ok} alt="ok" />
                                <p className='ff_gilroy fw_400 fs_16 fc_white mb-0' >Erat id aliquam habitant</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="position-relative" data-aos="flip-up" data-aos-duration="1500">
                    <img src={shadow} alt="shadow" className='shadow' />
                    <img src={shadow_2} alt="shadow" className='shadow-2' />
                    <div className='card-2 position-relative z-2'>
                        <Row className='d-flex justify-content-center align-items-center' data-aos="flip-ut" data-aos-duration="1500">
                            <Col lg={4} md={6} className='d-flex justify-content-center '>
                                <div className='pt-4'>
                                    <div className='mb-0'>
                                        <h2 className='fw_400 fs_35 ff_konexy fc_white max-w-320 text-md-start text-center'>Not Sure which service you need yet?	</h2>
                                    </div>
                                    <div className='mt-4 pt-3'>
                                        <button className=' ff_gilroy fw_600 fs_16 btn-1 '>Schedule An Appointment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className='d-flex justify-content-center text-md-start text-center' >
                                <div className='pt-4'>
                                    <div>
                                        <h4 className=' ff_gilroy fw_700 fs_24 fc_white max-w-380'>20-m free consultation that will help us identifyif  you need</h4>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center pt-3'>
                                        <img src={ok_2} alt="ok_2" />
                                        <p className=' ff_gilroy fw_400 fs_16 fc_white mb-0'>Technical Description & Discovery</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center pt-3'>
                                        <img src={ok_2} alt="ok_2" />
                                        <p className=' ff_gilroy fw_400 fs_16 fc_white mb-0'>Custom WordPress Development</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center pt-3'>
                                        <img src={ok_2} alt="ok_2" />
                                        <p className=' ff_gilroy fw_400 fs_16 fc_white mb-0'>Support & Maintenance</p>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center pt-3'>
                                        <img src={ok_2} alt="ok_2" />
                                        <p className=' ff_gilroy fw_400 fs_16 fc_white mb-0'>Other WordPress Service	</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className='d-flex justify-content-center justify-content-lg-end'>
                                <div className='py-4'>
                                    <img className='w-100' src={women} alt="women" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Studoi