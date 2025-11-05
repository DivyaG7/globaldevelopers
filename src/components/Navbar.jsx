import React from "react";
import whatsappIcon from "../assets/whatsapp-icon.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Global Logo" height="60" />
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center d-none d-lg-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Right Side */}
        <div className="customer-care d-none d-lg-flex align-items-center">
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
          <div className="divider"></div>
          <div className="customer-care-text">
            <span>Dial Customer Care</span>
            <p>1800-5722-789</p>
          </div>
        </div>

        {/* Mobile Offcanvas */}
        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Homepage
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* WhatsApp and Contact (mobile view) */}
            <div className="mt-4 d-flex align-items-center">
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="whatsapp-icon"
              />
              <div className="divider"></div>
              <div className="customer-care-text">
                <span>Dial Customer Care</span>
                <p>1800-5722-789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
