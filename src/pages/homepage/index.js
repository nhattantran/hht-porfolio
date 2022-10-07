import React from 'react';
import './style/homepage.css'

import {
    Container,
    Row,
    Col
} from 'react-bootstrap';

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="homepage-cover-image"></div>
            <div className="homepage-information">
                <Container fluid>
                    <Row className="homepage-content-header">
                        <Col md={6} className="homepage-content-header-profile">
                            <img className="homepage-content-avatar" src={require('./style/img/avt.png')} alt="" />
                            <div className="homepage-content-header-name">
                                Huynh Hien Thuong (Ms.) <br />
                                <span className="homepage-content-header-job">Content marketing intern</span>
                            </div>
                        </Col>
                        <Col md={6} className="homepage-content-header-major">
                            <div className="homepage-content-header-major-name">
                                Economics <br />
                                <span className="homepage-content-header-gpa">GPA 3.6/4</span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="homepage-content-body">
                        <Col md={4} className="homepage-content-body-column">
                            <p className="homepage-content-column-header">
                                Profile information
                            </p>
                            <p className="homepage-content-column-body">
                                Hi, I am Huynh Hien Thuong, a third-year student at the University of Economics and Law (UEL). People also call me the buffalo. My major is Economics and I am mainly working on Marketing. I do not hesitate to challenge myself in a big abroad company.
                            </p><br />
                            <p className="homepage-content-column-body">
                                <b>Technical skills: </b> Content writing, graphic design<br/><br/>
                                <b>Office IT skills: </b> Microsoft Word, Excel, Powerpoint <br /><br/>
                                <b>Soft skills: </b>Critical thinking, teamwork, problem solving                    
                            </p>
                        </Col>
                        <Col md={4}>
                            <p className="homepage-content-column-header">
                                Education
                            </p>
                            <p className="homepage-content-column-body">
                                <b>University of Economics and Law</b>
                            </p>
                        </Col>
                        <Col md={4}>
                            <p className="homepage-content-column-header">
                                Award
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Homepage;