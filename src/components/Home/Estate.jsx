import React from 'react'
import estate1 from '../../assets/estate1.jpeg'
import estate2 from '../../assets/estate2.jpeg'
import estate3 from '../../assets/estate3.jpeg'
import estate4 from '../../assets/estate4.jpeg'
import estate5 from '../../assets/estate5.jpeg'
import estate6 from '../../assets/estate6.jpeg'
import estate7 from '../../assets/estate7.jpeg'

const Estate = () => {
    const images = [
        estate1, estate2, estate3, estate4, estate5, estate6, estate7,
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-bold">Global Estate</h2>
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

export default Estate