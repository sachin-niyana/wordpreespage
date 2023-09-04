import React from 'react'
import team from '../assets/png/team.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Team = () => {
    return (
        <div className='bg_white' id='team'>
            <Container className='py-40 py-sm-60 py-md-80 py-lg-120 py-4' data-aos="fade-down" data-aos-duration="1500">
                <Row className='justify-content-center'>
                    <Col lg={6} className=' pt-4 pt-lg-0 mt-4'>
                        <h2 className='mb-0 ff_konexy fs_48 fc_black fw_400 pb-2'>Team Full of Stars	</h2>
                        <p className='mb-0 ff_gilroy fs_16 fw_400 fc_gray pb-2 pb-lg-4 pt-1'>Suspendisse consequat egestas arcu et et. Viverra quis euismod <span className='d-lg-block'>neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, </span>ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor <span className='d-xl-block'>sollicitudin risus eget euismod in bibendum turpis.</span></p>
                        <button className=' ff_gilroy fs_16 fw_600 btn-1 mt-2'>Explore</button>
                    </Col>
                    <Col sm={9} lg={6} className='menimg mt-4'>
                        <img src={team} alt="team" className='w-100 men' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team