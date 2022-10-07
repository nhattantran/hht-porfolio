import React from "react";

import './style/sidebar.css';

import {
    AiOutlinePhone,
    AiOutlineMail,
    AiOutlineLinkedin,
    AiOutlineFacebook,
} from 'react-icons/ai';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="avatar"></div>
                <span className="name">HUYNH HIEN THUONG (MS.)</span>
                <span className="job">Content marketing</span>
                <span className="description">A very proactive student who is deeply interested in marketing. Looking for a big aboad company for lifelong career.</span>
                <hr className="divider"/>
                <div className="basic-information">
                    <span>Gender: <b>Female</b></span>
                    <span>Date of Birth: <b>15 Aug 2002</b></span>
                    <span>Residence: <b>No.4, Street 16, Quarter 2, Hiep Binh Chanh Ward, Thu Duc City, HCMC</b></span>
                </div>
                <hr className="divider"/>
                <a href="tel:0387149665" className="basic-information">
                    <span>
                        <AiOutlinePhone className="contact-icon" /> (+84) 387 149 665
                    </span>
                </a>
                <a href="mailto:thuonghh20401c@st.uel.edu.vn" target="_blank" rel="noreferrer" className="basic-information">
                    <span>
                        <AiOutlineMail className="contact-icon" /> thuonghh20401c@st.uel.edu.vn
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/hienthuongne/" target="_blank" rel="noreferrer" className="basic-information">
                    <span>
                        <AiOutlineLinkedin className="contact-icon" /> linkedin.com/in/hienthuongne/
                    </span>
                </a>
                <a href="https://www.facebook.com/hienthuong158" target="_blank" rel="noreferrer" className="basic-information">
                    <span>
                        <AiOutlineFacebook className="contact-icon" /> hienthuong158
                    </span>
                </a>
                <hr className="divider"/>
                <div className="basic-information">
                    <span className="sidebar-quote">"Ignoring online marketing is like opening a business but not telling anyone.”</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;