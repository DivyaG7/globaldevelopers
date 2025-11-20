import React from 'react'
import Developers1 from '../../assets/developers1.jpeg'
import developers2 from '../../assets/developers2.jpeg'
import developers3 from '../../assets/developers3.jpeg'
import developers4 from '../../assets/developers4.jpeg'
import developers5 from '../../assets/developers5.jpeg'
import developers6 from '../../assets/developers6.jpeg'
import developers7 from '../../assets/developers7.jpeg'

const Developers = () => {
    const images = [
        Developers1, developers2, developers3, developers4, developers5, developers6, developers7,
    ];

    return (
        <div className="container my-5 consaltancy-img">
            <h2 className="text-center mb-4 fw-bold">Global Developers</h2>
            <div className="row g-4">
                {images.map((src, index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <div className="img-card overflow-hidden rounded shadow-sm">
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="img-fluid zoom-img"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Developers