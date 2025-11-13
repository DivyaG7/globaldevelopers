import React from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import whatsapp from '../assets/whatsapp.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
import logo from "../assets/logo.png"; // your logo path

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <div className="row gy-4">
                    {/* Left section */}
                    <div className="col-lg-4">
                        <a href="/">
                        <img src={logo} alt="Global Logo" className="footer-logo mb-3" /></a>
                        <p className="footer-desc">
                            Global delivers complete construction and development solutions.
                        </p>
                        <hr className="divider" />
                        <div className="d-flex align-items-center gap-3">
                            <h5 className="fw-bold mt-3">Follow Us</h5>
                            <div className="social-icons mt-2">
                                <img src={whatsapp} alt="social-icon" className="img-fluid" />
                                <img src={insta} alt="social-icon" className="img-fluid" />
                                <img src={linkedin} alt="social-icon" className="img-fluid" />
                                <img src={facebook} alt="social-icon" className="img-fluid" />
                                <img src={x} alt="social-icon" className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* Center section */}
                    <div className="col-lg-2">
                        <div className="footer-section">
                            <h5 className="fw-bold mb-3">GLOBAL</h5>
                            <ul className="list-unstyled">
                                <li className="mt-3"><a href="/">Home</a></li>
                                <li className="mt-3"><a href="/about">About Us</a></li>
                                <li className="mt-3"><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2">
                         <div className="footer-section">
                            <h5 className="fw-bold mb-3">OUR SERVICES</h5>
                            <ul className="list-unstyled">
                                <li className="mt-3">Global Sanitary Consultant</li>
                                <li className="mt-3">Global Associates</li>
                                <li className="mt-3">Global Developers</li>
                                <li className="mt-3">Global Estates</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="col-lg-4 col-md-12">
                        <h5 className="fw-bold mb-3">CONTACT US</h5>
                        <ul className="list-unstyled contact-info">
                            <li>
                                <FaLocationDot className="me-2" />
                                Global - Icon, Ground Floor, Plot No.131/73 New Vellala Street,
                                Kodambakkam, Chennai - 600 024
                            </li>
                            <li className="mt-3">
                                <FaPhone className="me-2" />
                                 +91 988886755
                            </li>
                            <li className="mt-3">
                                <FaEnvelope className="me-2" />
                                globalsanitary@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom text-center py-2">
                <p className="mb-0">copyright © 2024 by globaldevelopers.com</p>
            </div>
        </footer>
    );
};

export default Footer;
