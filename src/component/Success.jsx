import React from 'react'
import men_2 from '../assets/png/men-2.webp'
import ppc from '../assets/png/ppc.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Success = () => {
    return (
        <div className='mt-5 py-5 my-5' id='success'>
            <Container className='my-5'>
                <div className='d-lg-flex  justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                        <img className='w-100 men-2' src={men_2} alt="men-2" />
                    </div>
                    <div className='mt-5'>
                        <p className=' ff_gilroy fw_400 fs_16 fc_gray'>HAVE YOU SEEN OUR MASCOT?</p>
                        <h3 className=' ff_konexy fw_400 fs_48 fc_black'>Success Guides	</h3>
                        <Row className='d-flex justify-content-center'>
                            <Col md={3} sm={4} xs={6} className='d-flex justify-content-center'>
                                <button className='ff_gilroy fw_600 fs_16 btn-2 mt-4'>Category-1</button>
                            </Col>

                            <Col md={3} sm={4} xs={6} className='d-flex justify-content-center'>
                                <button className='ff_gilroy fw_600 fs_16 btn-2 mt-4'>Category-3</button>
                            </Col>

                            <Col md={3} sm={4} xs={6} className='d-flex justify-content-center'>
                                <button className='ff_gilroy fw_600 fs_16 btn-2 mt-4'>Category-2</button>
                            </Col>

                            <Col md={3} sm={4} xs={6} className='d-flex justify-content-center'>
                                <button className='ff_gilroy fw_600 fs_16 btn-2 mt-4'>Category-4</button>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-center mb-5'>
                            <Col md={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                                <div className='card-3 mt-5'>
                                    <img className='w-100' src={ppc} alt="ppc" />
                                    <h4 className=' ff_gilroy fw_600 fs_24 fc_black mt-3'>Sit diam metus</h4>
                                    <p className='ff_gilroy fw_400 fs_16 fc_gray'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <p className=' ff_gilroy fw_600 fs_16 fc_blue mb-0'>Read More....</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                                <div className='card-3 mt-5'>
                                    <img className='w-100' src={ppc} alt="ppc" />
                                    <h4 className=' ff_gilroy fw_600 fs_24 fc_black mt-3'>Sit diam metus</h4>
                                    <p className='ff_gilroy fw_400 fs_16 fc_gray'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <p className=' ff_gilroy fw_600 fs_16 fc_blue mb-0'>Read More....</p>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                                <div className='card-3 mt-5'>
                                    <img className='w-100' src={ppc} alt="ppc" />
                                    <h4 className=' ff_gilroy fw_600 fs_24 fc_black mt-3'>Sit diam metus</h4>
                                    <p className='ff_gilroy fw_400 fs_16 fc_gray'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                    <p className=' ff_gilroy fw_600 fs_16 fc_blue mb-0'>Read More....</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='box-card' data-aos="fade-up" data-aos-duration="1500">
                    <div class="box box-2 w-100 mt-5">
                        <div class="d-flex flex-column flex-lg-row justify-content-between">
                            <div class="d-flex flex-column align-items-center align-items-lg-start">
                                <h2 class="mb-0 ff_konexy fw_400 fs_48 fc_white">Have you</h2>
                                <p class="mb-0 ff_gilroy fw_600 fs_24 fc_white pt-2">read our study about Speed and Performance in <span class="d-xl-block">WordPress?</span></p>
                            </div>
                            <div class="d-flex align-items-center justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                                <button class=" btn-2 bg_white color_primary  ff_inter fs_16 fw_600">Check It Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Success