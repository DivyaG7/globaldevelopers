import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slide from "../assets/contact-banner.png";
import useScrollAnimation from "../components/Home/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://globaldevelopers.onrender.com/send-mail",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Email send failed:", error);
      toast.error("Failed to send message. Try again later.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const refup = useScrollAnimation("fade-up", 800);
  const refup1 = useScrollAnimation("fade-up", 800);
  const refup2 = useScrollAnimation("fade-up", 800);
  const refup3 = useScrollAnimation("fade-up", 800);
  const refup4 = useScrollAnimation("fade-up", 800);
  const ref1 = useScrollAnimation("fade-right", 800);
  const ref2 = useScrollAnimation("fade-right", 800);
  const ref3 = useScrollAnimation("fade-right", 800);
  const ref4 = useScrollAnimation("fade-right", 800);

  return (
    <>
      <div
        id="imageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="7000"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {/* <button
                        type="button"
                        data-bs-target="#imageCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#imageCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#imageCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button> */}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide} className="d-block w-100" alt="Slide 1" />
          </div>
          {/* <div className="carousel-item">
          <img src={slide} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={slide} className="d-block w-100" alt="Slide 3" />
        </div> */}
        </div>

        {/* Custom Previous Button */}
        {/* <button
        className="carousel-control-prev custom-control"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="prev"
      >
        <img src={leftArrow} alt="Previous" className="arrow-icon" />
      </button> */}

        {/* Custom Next Button */}
        {/* <button
        className="carousel-control-next custom-control"
        type="button"
        data-bs-target="#imageCarousel"
        data-bs-slide="next"
      >
        <img src={rightArrow} alt="Next" className="arrow-icon" />
      </button> */}
      </div>
      <section className="contact container py-5">
        <div className="row">
          {/* Left Side - Form */}
          <div className="col-md-7" ref={refup}>
            <h2 className="fw-bold mb-3">Contact Us</h2>
            <p className="mb-4 text-muted">
              We are deeply committed to delivering unparalleled service and
              unwavering support to ensure your experience exceeds expectations.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3" ref={refup1}>
                  <label className="form-label">
                    First Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control shadow"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3" ref={refup2}>
                  <label className="form-label">
                    Last Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control shadow"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="mb-3" ref={refup3}>
                <label className="form-label">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control shadow"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-4" ref={refup4}>
                <label className="form-label">
                  Description<span className="text-danger">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control shadow"
                  placeholder="Description"
                  required
                />
              </div>

              <button type="submit" className="btn w-100" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* Right Side - Info Boxes */}
          <div className="col-md-5 mt-5 mt-md-0 icon">
            <div
              className="d-flex align-items-center gap-4 p-3 mb-4 rounded"
              ref={ref1}
            >
              <div>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h6> Address</h6>
                <p className="mb-0 small">
                  Global - Icon,
                  <br />
                  Ground Floor, Plot No. 131/73 New Vellala Street,
                  <br />
                  Kodambakkam, Chennai - 600 024
                </p>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-4 p-3 mb-4 rounded"
              ref={ref2}
            >
              <div>
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h6> Contact</h6>
                <p className="mb-0 small">+91 9888867555</p>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-4 p-3 mb-4 rounded"
              ref={ref3}
            >
              <div>
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h6> Email</h6>
                <p className="mb-0 small">teamsglobaldevelopers@gmail.com</p>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-4 p-3 rounded"
              ref={ref4}
            >
              <div>
                <i className="bi bi-clock"></i>
              </div>
              <div>
                <h6> Working Hours</h6>
                <p className="mb-0 small">
                  Mon To Sat - 10 am To 6 pm
                  <br />
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Toast container for notifications */}
        <ToastContainer />
      </section>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15547.211402806175!2d80.2455552!3d13.048217600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761731712334!5m2!1sen!2sin"
          style={{ width: "100%", height: "400px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
