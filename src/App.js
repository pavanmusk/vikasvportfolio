import React from 'react';

// import './SidebarComponent/aside.css';
// import Aside from './SidebarComponent/Aside';
// import aboutimg from './rb_67075.png';

import { FiMail, FiPhone, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import Nav from './Nav';
const App = () => {

    return (
        <>

            <main>
                <aside className="sidebar " data-sidebar>
                    <div class="sidebar-info">
                        <figure class="avatar-box">
                            <img src='/assets/images/profile.png' alt="avatar" style={{ borderRadius: "100px" }} />

                        </figure>

                        <div className="info-content">
                            <h1 className="name" title="Richard Hanrick">Vikas Vaishnav</h1>
                            <p className="title">Full Stack Web Developer</p>
                        </div>

                        <button className="info-more-btn" data-sidebar-btn>
                            <span>Show Contacts</span>

                        </button>
                    </div>

                    <div className="sidebar-info-more">
                        <div className="separator"></div>

                        <ul className="contacts-list">
                            <li className="contact-item">
                                <div className="icon-box">
                                    <FiMail />
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">Email</p>

                                    <a href="mailto:vaishnavvikas936@gmail.com" className="contact-link">vaishnavvikas936@gmail.com</a>
                                </div>
                            </li>

                            <li className="contact-item">
                                <div className="icon-box">
                                    <FiPhone />
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">Phone</p>

                                    <a href="tel:+12133522795" className="contact-link">+91 9358949856</a>
                                </div>
                            </li>

                            <li className="contact-item">
                                <div className="icon-box">
                                    <FaBriefcase />
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">Work Experience</p>
                                    <time dateTime="P4Y">4+ Years</time>
                                </div>
                            </li>

                            <li className="contact-item">
                                <div className="icon-box">
                                    <FiMapPin />
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">Location</p>

                                    <address>Udaipur, (Raj.) India</address>
                                </div>
                            </li>
                        </ul>

                        <div className="separator"></div>

                        <ul className="social-list">
                            <li className="social-item"><a href="/" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li className="social-item"><a href="/" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li className="social-item"><a href="/" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                        </ul>
                    </div>
                </aside>
                <div className="main-content">
                    <Nav />

                </div>
            </main>
            {/* <Aside /> */}

        </>

    )
}

export default App 