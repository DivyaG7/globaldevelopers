import React from 'react'

const Corevalue = () => {
    return (
        <>
            <section className='corevalue p-5'>
                <div className='p-3'>
                <h2 className='fw-bold'>OUR CORE VALUES</h2>
                <p>Our people and our actions are driven by one overarching purpose: Building a better future, together. As
                    builders,we aren’t just creating new structures - we’re building people, communities and legacies.</p>
                  </div>

                <div className="d-flex flex-wrap justify-content-center gap-5 mt-2">
                    <div className="">
                        <div className="core-box">
                            <p className='fw-bold'>INTEGRITY</p>
                            <div class="overlay">
                                <p>We build on trust — every project is driven by honesty, transparency, and strong ethical standards that define our foundation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="core-box">
                            <p className='fw-bold'>QUALITY</p>
                            <div class="overlay">
                                <p>Delivering excellence is our blueprint. From materials to workmanship, we ensure every detail meets the highest standards.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="core-box">
                            <p className='fw-bold'>SAFETY</p>
                            <div class="overlay">
                                <p>Safety isn’t just a rule — it’s our culture. We protect our people, partners, and environment in every step of construction.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="core-box">
                            <p className='fw-bold'>INNOVATION</p>
                            <div class="overlay">
                                <p>We embrace modern technologies and creative solutions to construct smarter, faster, and more sustainable futures.</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="core-box">
                            <p className='fw-bold'>TEAMWORK</p>
                            <div class="overlay">
                                <p>Together, we build stronger. Collaboration, respect, and unity drive every successful project we deliver.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Corevalue