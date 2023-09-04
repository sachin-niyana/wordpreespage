import React, { useState } from 'react'
import menu from '../assets/png/menu.webp'
import cross from '../assets/png/cross.webp'
import earth from '../assets/png/earth.webp'
import { Container, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [show, setShow] = useState(false)
    if (show) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    return (
        <div className='bg_black'>
            <nav className='position-fixed z-1000 w-100 top-0 bg-black'>
                <Container className='py-3'>
                    <div className='d-flex align-items-center justify-content-between ps-xl-5 ms-xl-5 pe-xl-5 me-xl-5'>
                        <div className={`${show ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none '
                                onClick={() => setShow(false)}>
                                <Link><img className='cross' src={cross} alt="cross" /></Link>
                            </div>
                            <div className='d-flex gap-4 align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' ff_gilroy fs_16 fc_white btnarrow fw_400'>
                                        WordPress Solution
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#agency">FAQ'S</Dropdown.Item>
                                        <Dropdown.Item href="#agile">our-team</Dropdown.Item>
                                        <Dropdown.Item href="#featured">featured</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' ff_gilroy fs_16 fc_white btnarrow fw_400'>
                                        Services
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#integer">FAQ'S</Dropdown.Item>
                                        <Dropdown.Item href="#studoi">our-team</Dropdown.Item>
                                        <Dropdown.Item href="#team">featured</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a onClick={() => setShow(false)} className='ff_gilroy line position-relative fs_16 fc_white underline  fw_400' href='/passanger'>Portfolio</a>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' ff_gilroy fs_16 fc_white btnarrow fw_400'>
                                        About
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#success">FAQ'S</Dropdown.Item>
                                        <Dropdown.Item href="#long_term">our-team</Dropdown.Item>
                                        <Dropdown.Item href="#footer">featured</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a onClick={() => setShow(false)} className='ff_gilroy line position-relative fs_16 fc_white underline  fw_400' href='/passanger'>Blog</a>
                                <a onClick={() => setShow(false)} className='d-lg-none ff_gilroy line position-relative fs_16 fc_white  fw_400' href='/order'>1 888 266-6917 (eu?)</a>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 '>
                            <a onClick={() => setShow(false)} className='d-none d-lg-block ff_gilroy line position-relative fs_16 fc_white  fw_400' href='/order'>1 888 266-6917 (eu?)</a>
                            <button className='ff_gilroy fs_18 fc_white fw_600 btn-1'>Contact Us</button>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className=' ff_gilroy fs_16 fc_white btnarrow fw_400'>
                                    <img src={earth} alt="earth" />
                                    <span> Eng</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">Eng(us)</Dropdown.Item>
                                    <Dropdown.Item href="/">hindi</Dropdown.Item>
                                    <Dropdown.Item href="/">panjabi</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className='d-lg-none '>
                            <Link onClick={() => setShow(true)}>
                                <img className='menu' src={menu} alt="menu" /></Link>
                        </div>

                    </div>
                </Container>
            </nav >
        </div>
    )
}

export default Nav