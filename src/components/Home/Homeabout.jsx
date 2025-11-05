import React from 'react'
import arrow from '../../assets/cross-arrow.png'
import homeabout from '../../assets/home-about.png'

const Homeabout = () => {
    return (
        <>
            <section className='home-about p-5'>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center mb-2">
                        <img src={homeabout} alt='home-about-image' className='img-fluid w-75' />
                    </div>
                    <div className="col-md-6 mb-2">
                        <h2 className='fw-bold'>About us</h2>
                        <h6>THE GLOBAL CONSULTANCY PROVIDING SMART WORKS</h6>
                        <p>Global Sanitary Consultancy was established on January 14, 2010, initially focusing on small-scale contracts such as housekeeping, house cleaning, sewage management, and septic tank clearance.</p>
                        <p>In 2015, the firm expanded into Global Developers, specializing in apartment and joint venture construction projects, residential and industrial contracts, structural design, and waterproofing solutions.</p>
                        <p>Later, Global Associates was formed to handle planning approvals, task and layout approvals, and provide technical solutions for various development projects.</p>
                        <p>By 2023, the business evolved into Global Estates, concentrating on layout formation, group developments, and individual villa projects.</p>
                        <div>
                            <a href='/about'>
                            <button>Read More</button></a>
                            <img src={arrow} alt='arrow-image' className='img-fluid arrow' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homeabout