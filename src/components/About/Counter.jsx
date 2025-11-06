import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import aboutImg from "../../assets/about-img.png"; // your image

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // runs once when visible
    threshold: 0.3,    // trigger when 30% visible
  });

  return (
    <>
      <section ref={ref} className="counter container text-center py-5">
        <h2 className="fw-bold">About us</h2>
        <h6>THE GLOBAL CONSULTANCY PROVIDING SMART WORKS</h6>

        <p className="mt-4">
          Global Sanitary Consultancy was established on January 14, 2010, initially focusing on small-scale contracts such as housekeeping, house cleaning, sewage management, and septic tank clearance. In 2015, the firm expanded into Global Developers, specializing in apartment and joint venture construction projects, residential and industrial contracts, structural design, and waterproofing solutions.
        </p>

        <p>
          Later, Global Associates was formed to handle planning approvals, task and layout approvals, and provide technical solutions for various development projects. By 2023, the business evolved into Global Estates, concentrating on layout formation, group developments, and individual villa projects.
        </p>

        <div className="row align-items-center mt-5">
          <div className="col-md-7">
            <img src={aboutImg} alt="about" className="img-fluid rounded shadow" />
          </div>

          <div className="col-md-5 mt-md-0 mt-4">
            <div className="about-count-box p-5 rounded-4 shadow text-start">
              <div className="mb-4">
                <h3 className="fw-bold display-5">
                  {inView && <CountUp start={0} end={10} duration={2.5} />}+
                </h3>
                <h5>Years in Operation</h5>
              </div>

              <div className="mb-4">
                <h3 className="fw-bold display-5">
                  {inView && <CountUp start={0} end={30} duration={2.5} />}+
                </h3>
                <h5>Commercial & Industrial Projects</h5>
              </div>

              <div>
                <h3 className="fw-bold display-5">
                  {inView && <CountUp start={0} end={50} duration={2.5} />}+
                </h3>
                <h5>Residential Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="meet py-5">
        <p>Lord know’s it’s been hard. At nearly 800 people strong and growing, we’re not doing victory laps, but instead
          doubling down on the leadership traits the helped us maintain this balance so far.</p>
        <div className="d-flex gap-4 justify-content-center mt-4">
          <button>MEET THE GLOBAL DEVELOPER LEADERS</button>
        </div>
      </div>

      <div className="applynow text-center py-5">
        <h2 className='fw-bold'>CAREERS AT GLOBAL DEVELOPERS</h2>
        <p>
          If your heart’s in CONSTRUCTION DEISGN,
          and you think the journey is as important as the destination,
          join us for the ride.</p>
        <a href="/contact">
          <button>Apply Now</button>
        </a>
      </div>
    </>
  );
};

export default Counter;
