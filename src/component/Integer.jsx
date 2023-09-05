import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { card } from './Hyper'

const Integer = () => {
    return (
        <div className='py-5 overflow-hidden' id='integer'>
            <Container>
                <h3 className='ff_konexy fs_48 fw_400 fc_black'>Integer et nisl non</h3>
                <Row className='d-flex justify-content-center'>
                    {card.map((data) => {
                        return (
                            <Col lg={4} sm={6} className='d-flex justify-content-center' data-aos="flip-left" data-aos-duration="1500">
                                <div className='card-1 cursor mt-5'>
                                    <div className='d-flex justify-content-center mt-5'>
                                        <img src={data.img} alt="contect" />
                                    </div>
                                    <div className='d-flex justify-content-center text-center'>
                                        <h4 className='ff_inter fw_600 fs_24 fc_black mt-5'>{data.heading}</h4>
                                    </div>
                                    <div className='d-flex justify-content-center text-center mt-3'>
                                        <p className='ff_gilory fw_400 fs_16 fc_gray max-w-300 ff_gilroy'>{data.peragraph}</p>
                                    </div>
                                    <div className='d-flex justify-content-center mb-4'>
                                        <Link className='ff_gilory fw_600 fs_16 fc_blue ff_gilroy'>{data.link}</Link>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>

    )
}

export default Integer