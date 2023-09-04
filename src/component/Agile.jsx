import React from 'react'
import men from '../assets/png/men.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Agile = () => {
    return (
        <div className='py-5 overflow-hidden' id='agile'>
            <Container>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col lg={6} data-aos="fade-left" data-aos-duration="1500">
                        <div className='mt-5'>
                            <img className='w-100' src={men} alt="men" />
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-right" data-aos-duration="1500">
                        <div className='mb-0 mt-5'>
                            <h3 className='fw_400 ff_konexy fs_48 fc_blue'>Agile WordPress <span className='fw_400 ff_konexy fs_48 fc_black'>Development Project management</span></h3>
                        </div>
                        <div className='mb-0 mt-3'>
                            <p className='fw_400 fs_16 ff_gilroy fc_gray pe-xl-5'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>

                        </div>
                        <div className='mb-0'>
                            <button className='fs_16 fw_400 ff_gilroy btn-1'>Explore</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Agile