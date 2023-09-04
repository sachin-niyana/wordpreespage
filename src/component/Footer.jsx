import React from 'react'
import arrow from '../assets/png/arrow.webp'
import search_2 from '../assets/png/search-2.webp'
import call from '../assets/png/call.webp'
import home from '../assets/png/home.webp'
import massege from '../assets/png/massege.webp'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FacebookIcon, GitIcon, InlinkedIcon, InstagramIcon, TwitterIcon, WordpreesIcon, WorldpreesIcon } from './icon'

const Footer = () => {
    return (
        <div className='bg-black py-4 pt-5' id='footer'>
            <Container>
                <div className=' d-flex justify-content-end pt-3 pt-5 mt-5'>
                    <div className='seacrh-2 d-flex justify-content-between mb-0 '>
                        <input type="text" placeholder='Search here....' className='w-100 me-3' />
                        <img src={search_2} alt="search" />
                    </div>
                </div>
                <Row>
                    <Col lg={3} md={4} sm={6} className='d-lg-flex justify-content-center'>
                        <div className='mb-0 mt-5'>
                            <h3 className=' ff_gilroy fw_400 fs_16 fc_white'>Services</h3>
                            <div className='d-flex align-items-center  pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>WordPress Development</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>WooCommerce Development</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>WordPress Maintenance</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>Speed Optimization</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>Dedicated WordPress Developer</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>Headless WordPress Development</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>White Label Development</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='d-lg-flex justify-content-center'>
                        <div className='mb-0 mt-5'>
                            <h3 className=' ff_gilroy fw_400 fs_16 fc_white'>Services</h3>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>WordPress Hosting</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>PSD, XD, Figma to WordPress Conversion</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>Custom WordPress Theme</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>Custom WordPress Plugins</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>CMS to WordPress</p>
                            </div>
                            <div className='d-flex align-items-center pt-2'>
                                <img src={arrow} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 position-relative underline cursor'>WordPress Malware Removal</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='d-lg-flex justify-content-center'>
                        <div className='mb-0 mt-5'>
                            <h3 className=' ff_gilroy fw_400 fs_16 fc_white'>Latest Articles</h3>
                            <div className='d-flex align-items-center pt-3'>

                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>7 WordPress Plugins to Create an Effective Newsletter 03.01.2022</p>
                            </div>
                            <div className='d-flex align-items-center pt-3'>

                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                    02.01.2022</p>
                            </div>
                            <div className='d-flex align-items-center pt-3'>

                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>5 Reasons the Future of WordPress Is Headless 01.01.2022</p>
                            </div>
                            <div className='d-flex align-items-center pt-3'>

                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} className='d-lg-flex justify-content-center'>
                        <div className='mb-0 mt-5'>
                            <h3 className=' ff_gilroy fw_400 fs_16 fc_white'>Contact</h3>
                            <div className='d-flex align-items-center pt-3 gap-2'>
                                <img src={call} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>WordPress Development</p>
                            </div>
                            <div className='d-flex align-items-center pt-3 gap-2'>
                                <img src={call} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>WooCommerce Development</p>
                            </div>
                            <div className='d-flex align-items-center pt-3 gap-2'>
                                <img src={massege} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>WordPress Maintenance</p>
                            </div>
                            <div className='d-flex align-items-center pt-3 gap-2'>
                                <img src={home} alt="arow" />
                                <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor'>Speed Optimization</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='mt-5'>
                <div className='footer-line'></div>
            </div>
            <Container>
                <div className='d-sm-flex justify-content-between align-items-center mt-4'>
                    <div className='mb-0'>
                        <h4 className=' ff_gilroy fw_400 fs_14 fc_white'>© Vipe Studio 2016-2022</h4>
                        <div className='d-flex align-items-center gap-2 pt-2'>
                            <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor '>Privacy</p>
                            <div className='footer-line-2'></div>
                            <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor '>Careers</p>
                            <div className='footer-line-2'></div>
                            <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor '>Media</p>
                            <div className='footer-line-2'></div>
                            <p className='ff_gilroy fw_400 fs_14 fc_white mb-0 cursor '>Client Area</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap-3 mt-3'>
                        <Link className='git'><GitIcon /></Link>
                        <Link className='git'><InlinkedIcon /></Link>
                        <Link className='git'><TwitterIcon /></Link>
                        <Link className='git'><FacebookIcon /></Link>
                        <Link className='git'><InstagramIcon /></Link>
                        <Link className='git'><WordpreesIcon /></Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer