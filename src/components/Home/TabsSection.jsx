import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import consultancy from '../../assets/consultancy.png'
import associates from '../../assets/associates.png'
import developers from '../../assets/developers.png'
import estates from '../../assets/estates.png'
import { Link } from "react-router-dom";

const TabsSection = () => {
  return (
    <div className="container text-center my-5">
      <ul className="nav tab-buttons" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="tab1"
            data-bs-toggle="tab"
            data-bs-target="#content1"
            type="button"
            role="tab"
          >
            Global Sanitary Consultancy
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab2"
            data-bs-toggle="tab"
            data-bs-target="#content2"
            type="button"
            role="tab"
          >
            Global Associates
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab3"
            data-bs-toggle="tab"
            data-bs-target="#content3"
            type="button"
            role="tab"
          >
            Global Developers
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tab4"
            data-bs-toggle="tab"
            data-bs-target="#content4"
            type="button"
            role="tab"
          >
            Global Estates
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="content1"
          role="tabpanel"
        >
          <div className="content-wrapper">
            <div className="col-lg-8 text-start">
              <h2>Global Sanitary Consultancy</h2>
              <h5>Sanitary & Civil Contractors</h5>
              <p className="fs-5">Complete Sanitary Solution</p>
              <p className="mt-4">
                We specialize in sanitary, plumbing, and civil infrastructure works for all project scales.  Delivering complete sanitary solutions with precision, quality, and timely execution.
              </p>
            </div>
            <div className="col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src={consultancy}
                alt="sanitary work"
                className="img-fluid"
              />
              <Link to='/consultancy' className="link">
                <button className="read-more-btn mt-3">
                  Read More <span>&#8599;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="content2" role="tabpanel">
          <div className="content-wrapper">
            <div className="col-lg-8 text-start">
              <h2>Global Associates</h2>
              <h5>Connectors & Consultant</h5>
              <p className="fs-5">Complete Technical Solution</p>
              <p className="mt-4">
                We specialize in delivering integrated technical services and expert consultancy. Driven by innovation, we turn complex ideas into sustainable outcomes.
              </p>
            </div>
            <div className="col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src={associates}
                alt="project"
                className="img-fluid"
              />
              <Link to='/estate' className="link">
                <button className="read-more-btn mt-3">
                  Read More <span>&#8599;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="content3" role="tabpanel">
          <div className="content-wrapper">
            <div className="col-lg-8 text-start">
              <h2>Global Developers</h2>
              <h5>Promoters Contractors</h5>
              <p className="fs-5">Lights Your Home</p>
              <p className="mt-4">
                We build homes that blend quality construction with modern design.  Crafting spaces that inspire comfort, trust, and a brighter way of living.
              </p>
            </div>
            <div className="col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src={developers}
                alt="developers"
                className="img-fluid"
              />
              <button className="read-more-btn mt-3">
                Read More <span>&#8599;</span>
              </button>
            </div>
          </div>
        </div>


        <div className="tab-pane fade" id="content4" role="tabpanel">
          <div className="content-wrapper">
            <div className="col-lg-8 text-start">
              <h2>Global Estates</h2>
              <h5>Promoters Contractors</h5>
              <p className="fs-5">Lights Your Home</p>
              <p className="mt-4">
                Building dreams with quality construction and trusted expertise.  We light your home with excellence, elegance, and enduring value.
              </p>
            </div>
            <div className="col-lg-3 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                src={estates}
                alt="developers"
                className="img-fluid"
              />
              <button className="read-more-btn mt-3">
                Read More <span>&#8599;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
