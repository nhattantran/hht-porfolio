import React from 'react';
import { Outlet } from 'react-router-dom';
import './style/mainpage.css';
import {Container, Row, Col} from 'react-bootstrap';

import Header from '../component/Header.js'
import Sidebar from '../component/Sidebar.js'
import Content from '../component/Content.js'
import ScrollToTop from '../component/ScrollToTop.js'


function HomeLayout() {
    return (
        <React.Fragment>
            <Header />
            <ScrollToTop />
            <Container fluid className="container-page">
                <Row>
                    <Col md={3} className="sidebar-display">
                        <Sidebar />
                    </Col>
                    <Col md={9} className="content-display">
                        <Content>
                            <Outlet />
                        </Content>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomeLayout;