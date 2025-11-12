import React from 'react'
import consultancy1 from '../../assets/consultancy/1.jpeg'
import consultancy2 from '../../assets/consultancy/2.jpeg'
import consultancy3 from '../../assets/consultancy/3.jpeg'
import consultancy4 from '../../assets/consultancy/4.jpeg'
import consultancy5 from '../../assets/consultancy/5.jpeg'
import consultancy6 from '../../assets/consultancy/6.jpeg'
import consultancy7 from '../../assets/consultancy/7.jpeg'
import consultancy8 from '../../assets/consultancy/8.jpeg'
import consultancy9 from '../../assets/consultancy/9.jpeg'
import consultancy10 from '../../assets/consultancy/10.jpeg'
import consultancy11 from '../../assets/consultancy/11.jpeg'
import consultancy12 from '../../assets/consultancy/12.jpeg'
import consultancy13 from '../../assets/consultancy/13.jpeg'
import consultancy14 from '../../assets/consultancy/14.jpeg'
import consultancy15 from '../../assets/consultancy/15.jpeg'
import consultancy16 from '../../assets/consultancy/16.jpeg'
import consultancy17 from '../../assets/consultancy/17.jpeg'
import consultancy18 from '../../assets/consultancy/18.jpeg'
import consultancy19 from '../../assets/consultancy/19.jpeg'
import consultancy20 from '../../assets/consultancy/20.jpeg'
import consultancy21 from '../../assets/consultancy/21.jpeg'
import consultancy22 from '../../assets/consultancy/22.jpeg'
import consultancy23 from '../../assets/consultancy/23.jpeg'

const Consultancy = () => {
    const images = [
        consultancy1, consultancy2, consultancy3, consultancy4, consultancy5, consultancy6, consultancy7, consultancy8, consultancy9, consultancy10, consultancy11, consultancy12, consultancy13, consultancy14, consultancy15, consultancy16, consultancy17, consultancy18, consultancy19, consultancy20, consultancy21, consultancy22, consultancy23
    ];

    return (
        <div className="container my-5 consaltancy-img">
            <h2 className="text-center mb-4 fw-bold">Global Sanitary Consultancy</h2>
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

export default Consultancy