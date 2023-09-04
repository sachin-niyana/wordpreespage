import React from 'react'
import contect from '../assets/png/contect.webp'
import box from '../assets/png/box.webp'
import headphone from '../assets/png/headphone.webp'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Integer = () => {
    return (
        <div className='py-5' id='integer'>
            <Container>
                <h3 className='ff_konexy fs_48 fw_400 fc_black'>Integer et nisl non</h3>
                <Row className='d-flex justify-content-center'>
                    <Col lg={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                        <div className='card-1 cursor mt-5'>
                            <div className='d-flex justify-content-center mt-5'>
                                <img src={contect} alt="contect" />
                            </div>
                            <div className='d-flex justify-content-center text-center'>
                                <h4 className='ff_inter fw_600 fs_24 fc_black mt-5'>Enterprise WordPress Solutions</h4>
                            </div>
                            <div className='d-flex justify-content-center text-center mt-3'>
                                <p className='ff_gilory fw_400 fs_16 fc_gray max-w-300 ff_gilroy'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='ff_gilory fw_600 fs_16 fc_blue ff_gilroy'>Learn More</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                        <div className='card-1 cursor mt-5'>
                            <div className='d-flex justify-content-center mt-5'>
                                <img src={box} alt="contect" />
                            </div>
                            <div className='d-flex justify-content-center text-center'>
                                <h4 className='ff_inter fw_600 fs_24 fc_black mt-5'>Small to Mid Size Business Development		</h4>
                            </div>
                            <div className='d-flex justify-content-center text-center mt-3'>
                                <p className='ff_gilory fw_400 fs_16 fc_gray max-w-300 ff_gilroy '>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='ff_gilory fw_600 fs_16 fc_blue ff_gilroy'>Learn More</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                        <div className='card-1 cursor mt-5'>
                            <div className='d-flex justify-content-center mt-5'>
                                <img src={headphone} alt="contect" />
                            </div>
                            <div className='d-flex justify-content-center text-center'>
                                <h4 className='ff_inter fw_600 fs_24 fc_black mt-5'>Support & Maintenance	</h4>
                            </div>
                            <div className='d-flex justify-content-center text-center mt-3'>
                                <p className='ff_gilory fw_400 fs_16 fc_gray max-w-300 ff_gilroy'>Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.</p>
                            </div>
                            <div className='d-flex justify-content-center mb-4'>
                                <Link className='ff_gilory fw_600 fs_16 fc_blue ff_gilroy'>Learn More</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Integer