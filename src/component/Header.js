import React, {useState, useEffect} from "react";
import './style/header.css'
import {Link} from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
} from 'react-icons/ai';

import {
    BiUser,
    BiPowerOff,
} from 'react-icons/bi'

import {
    TiDocumentText,
} from 'react-icons/ti';

import {
    ImBlog,
} from 'react-icons/im'

function Header() {
    const [scrollClass, setScrollClass] = useState('');

    useEffect(() =>{
        window.onscroll =() => {
            if (window.pageYOffset !== 0) setScrollClass('header-scroll');
            else setScrollClass('')
        }
    }, [])
    return (
        <div className={"page-header "+ scrollClass}>
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="my-name">Ht.</div>
                    </Col>
                    <Col md={10} className="header-menu">
                        <Link to="/" className="header-button">
                            <AiOutlineHome className="header-button-icon" />
                            <span>Home</span>
                        </Link>
                        <Link to="/about" className="header-button">
                            <BiUser className="header-button-icon" />
                            <span>About</span>
                        </Link>
                        <Link to="/projects" className="header-button">
                            <AiOutlineFundProjectionScreen className="header-button-icon" />
                            <span>Projects</span>
                        </Link>
                        <Link to="/resume" className="header-button">
                            <TiDocumentText className="header-button-icon" />
                            <span>Resume</span>
                        </Link>
                        <Link to="/blog" className="header-button">
                            <ImBlog className="header-button-icon" />
                            <span>My Blog</span>
                        </Link>
                        <Link to="/login" className="header-button login-button">
                            <BiPowerOff className="header-button-icon" />
                            <span>Login</span>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;