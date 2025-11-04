import React from 'react'
import accord from '../../assets/accord.png'
import client1 from '../../assets/client-logo1.png'
import client2 from '../../assets/client-logo2.png'
import client3 from '../../assets/client-logo3.png'
import client4 from '../../assets/client-logo4.png'

const Ourwork = () => {
    return (
        <>
            <section className='py-5'>
                <h2 className='fw-bold text-center'>Our Work</h2>
                <div className="our-work py-5">
                    <div className='text-center p-3'>
                        <p>Our Clients tell us they trust and love us because we “get the things done”</p>
                        <p>Here’s a glimpse of what we’ve been creating lately — explore our latest projects and craftsmanship.</p>
                        <button>View More</button>
                    </div>

                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-md-3 mb-3 works">
                                <div className="work-box">
                                    <img src={accord} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>HOTEL ACCORD</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3 works">
                                <div className="work-box">
                                    <img src={accord} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>HOTEL ACCORD</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3 works">
                                <div className="work-box">
                                    <img src={accord} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>HOTEL ACCORD</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 works">
                                <div className="work-box">
                                    <img src={accord} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>HOTEL ACCORD</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='clients container py-5'>
                    <h2 className='fw-bold'>Our Clients</h2>
                    <p>THE GLOBAL CONSULTANCY PROVIDING SMART WORKS</p>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className='client-box p-4'>
                                <img src={client1} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='client-box p-4'>
                                <img src={client2} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='client-box p-4'>
                                <img src={client3} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='client-box p-4'>
                                <img src={client4} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourwork