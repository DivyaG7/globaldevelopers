import React, { useState } from "react";
import useScrollAnimation from "./useScrollAnimation"; 
import upar1 from '../../assets/upar/1.png'
import upar2 from '../../assets/upar/2.png'
import upar3 from '../../assets/upar/3.png'
import upar4 from '../../assets/upar/4.png'
import upar5 from '../../assets/upar/5.png'
import upar6 from '../../assets/upar/6.png'
import upar7 from '../../assets/upar/7.png'
import individual1 from '../../assets/individual/1.png'
import individual2 from '../../assets/individual/2.png'
import individual3 from '../../assets/individual/3.png'
import individual4 from '../../assets/individual/4.png'
import individual5 from '../../assets/individual/5.png'
import individual6 from '../../assets/individual/6.png'
import individual7 from '../../assets/individual/7.png'
import individual8 from '../../assets/individual/8.png'
import individual9 from '../../assets/individual/9.png'
import individual10 from '../../assets/individual/10.png'
import individual11 from '../../assets/individual/11.png'
import individual12 from '../../assets/individual/12.png'
import individual13 from '../../assets/individual/13.png'
import individual14 from '../../assets/individual/14.png'
import kolappam1 from '../../assets/kolappakm/1.png'
import kolappam2 from '../../assets/kolappakm/2.png'
import kolappam3 from '../../assets/kolappakm/3.png'
import kolappam4 from '../../assets/kolappakm/4.png'
import kolappam5 from '../../assets/kolappakm/5.png'
import kolappam6 from '../../assets/kolappakm/6.png'
import redhills1 from '../../assets/redhills/1.png'
import redhills2 from '../../assets/redhills/2.png'
import redhills3 from '../../assets/redhills/3.png'
import redhills4 from '../../assets/redhills/4.png'
import redhills5 from '../../assets/redhills/5.png'
import redhills6 from '../../assets/redhills/6.png'
import kodambakkam1 from '../../assets/kodambakkam/1.png'
import kodambakkam2 from '../../assets/kodambakkam/2.png'
import kodambakkam3 from '../../assets/kodambakkam/3.png'
import kodambakkam4 from '../../assets/kodambakkam/4.png'
import kodambakkam5 from '../../assets/kodambakkam/5.png'
import iyappanthangal1 from '../../assets/iyappanthangal/1.png'
import iyappanthangal2 from '../../assets/iyappanthangal/2.png'
import iyappanthangal3 from '../../assets/iyappanthangal/3.png'
import iyappanthangal4 from '../../assets/iyappanthangal/4.png'
import iyappanthangal5 from '../../assets/iyappanthangal/5.png'
import vadapalani1 from '../../assets/vadapalani/1.png'
import vadapalani2 from '../../assets/vadapalani/2.png'
import vadapalani3 from '../../assets/vadapalani/3.png'
import vadapalani4 from '../../assets/vadapalani/4.png'
import mannivakkam1 from '../../assets/mannivakkam/1.png'
import mannivakkam2 from '../../assets/mannivakkam/2.png'
import mannivakkam3 from '../../assets/mannivakkam/3.png'
import mannivakkam4 from '../../assets/mannivakkam/4.png'
import mannivakkam5 from '../../assets/mannivakkam/5.png'
import perumbakkam1 from '../../assets/perumbakkam/1.png'
import perumbakkam2 from '../../assets/perumbakkam/2.png'
import perumbakkam3 from '../../assets/perumbakkam/3.png'
import perumbakkam4 from '../../assets/perumbakkam/4.png'
import perumbakkam5 from '../../assets/perumbakkam/5.png'


const projects = [
  {
    name: "Upar Hotel",
    images: [ upar1, upar2, upar3, upar4, upar5, upar6, upar7 ],
  },
  {
    name: "Global Individual House & Appartments",
    images: [ individual1, individual2, individual3, individual4, individual5, individual6, individual7, individual8, individual9, individual10, individual11, individual12, individual13, individual14],
  },
  {
    name: "Global Venture Kolappakm",
    images: [ kolappam1, kolappam2, kolappam3, kolappam4, kolappam5, kolappam6 ],
  },
  {
    name: "Global Elite Redhills",
    images: [ redhills1, redhills2, redhills3, redhills4, redhills5, redhills6 ],
  },
  {
    name: "Global Compess Kodambakkam",
    images: [ kodambakkam1, kodambakkam2, kodambakkam3, kodambakkam4, kodambakkam5 ],
  },
  {
    name: "Global Fantasy Iyappanthangal",
    images: [ iyappanthangal1, iyappanthangal2, iyappanthangal3, iyappanthangal4, iyappanthangal5],
  },
  {
    name: "Global Jains arcate vadapalani",
    images: [ vadapalani1, vadapalani2, vadapalani3, vadapalani4 ],
  },
  {
    name: "Global Vista Mannivakkam",
    images: [ mannivakkam1, mannivakkam2, mannivakkam3, mannivakkam4, mannivakkam5 ],
  },
  {
    name: "Global Perumbakkam",
    images: [ perumbakkam1, perumbakkam2, perumbakkam3, perumbakkam4, perumbakkam5 ],
  },
];

export default function OurWorkGallery() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const fadeUp = useScrollAnimation("fade-up", 800);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">Our Works</h2>
      <div className="red-banner p-3 mb-4 text-white fw-semibold">
        Here’s a glimpse of what we’ve been creating lately — Explore our latest
        projects and craftsmanship.
      </div>

      <div className="row">
        {/* Left Side Buttons */}
        <div className="col-lg-3 mb-4">
          <div className="project-list border rounded p-3">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(project)}
                className={`project-btn ${
                  activeProject.name === project.name ? "active" : ""
                }`}
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Images */}
        <div className="col-lg-9">
          <div className="row g-4" ref={fadeUp}>
            {activeProject.images.map((img, i) => (
              <div className="col-md-4" key={i}>
                <div className="work-card shadow-sm rounded-3 overflow-hidden">
                  <img
                    src={img}
                    alt="project"
                    className="img-fluid w-100 work-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
