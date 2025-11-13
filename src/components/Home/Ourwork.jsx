import React from 'react'
import apartment from '../../assets/FANTACY APARTMENTS.png'
import houses from '../../assets/INDIVIDUAL HOUSES.png'
import upar from '../../assets/UPAR HOTELS.png'
import oyo from '../../assets/OYO.png'
import ClientCarousel from './ClientCarousel'
import useScrollAnimation from './useScrollAnimation'
import { Link } from 'react-router-dom'

const Ourwork = () => {
    const ref1 = useScrollAnimation("fade-up", 800);
    const ref2 = useScrollAnimation("fade-down", 800);
    const ref3 = useScrollAnimation("fade-up", 800);
    const ref4 = useScrollAnimation("fade-down", 800);
    const refleft = useScrollAnimation("fade-left", 800);
    return (
        <>
            <section className='py-5'>
                <h2 className='fw-bold text-center'>Our Work</h2>
                <div className="our-work py-5">
                    <div className='text-center p-3'>
                        <p>Our Clients tell us they trust and love us because we “get the things done”</p>
                        <p>Here’s a glimpse of what we’ve been creating lately — explore our latest projects and craftsmanship.</p>
                        <Link to='/ourworkgallery'>
                            <button>View More</button>
                        </Link>
                    </div>

                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-md-3 mb-3 works" ref={ref1}>
                                <div className="work-box">
                                    <img src={apartment} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>APARTMENTS</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3 works" ref={ref2}>
                                <div className="work-box">
                                    <img src={houses} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>INDIVIDUAL HOUSES</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-3 works" ref={ref3}>
                                <div className="work-box">
                                    <img src={upar} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>UPAR HOTELS</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 works" ref={ref4}>
                                <div className="work-box">
                                    <img src={oyo} alt="our-work-image" className="img-fluid" />
                                    <div className="overlay">
                                        <h4>OYO</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='clients container py-5 mt-3'>
                    <div ref={refleft}>
                        <h2 className='fw-bold'>Our Clients</h2>
                        <p>THE GLOBAL CONSULTANCY PROVIDING SMART WORKS</p>
                    </div>
                    {/* <div className="row mt-4">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client1} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client2} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client3} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client4} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client5} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client6} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className='client-box p-4'>
                                <img src={client7} alt='client-logo' className='img-fluid' />
                            </div>
                        </div>
                    </div> */}
                    <ClientCarousel />

                </div>
            </section>
        </>
    )
}

export default Ourwork