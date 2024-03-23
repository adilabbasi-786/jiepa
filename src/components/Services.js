import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { BiRightArrowAlt } from "react-icons/bi";
import { CiStethoscope } from "react-icons/ci";

const Services = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Хэвтэн эмчлүүлэх
          </h5>
          <h1 className="display-4">Excellent Medical Services</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <FaAmbulance
                  className="fa fa-2x fa-user-md text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Emergency Care</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <FaProcedures
                  className="fa fa-2x fa-procedures text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Operation & Surgery</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <CiStethoscope
                  className="fa fa-2x fa-stethoscope text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Outdoor Checkup</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <FaAmbulance
                  className="fa fa-2x fa-ambulance text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Ambulance Service</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <GiMedicines
                  className="fa fa-2x fa-pills text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Medicine & Pharmacy</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon mb-4">
                <FaMicroscope
                  className="fa fa-2x fa-microscope text-white"
                  style={{ fontSize: "2em" }}
                />
              </div>
              <h4 className="mb-3">Blood Testing</h4>
              <p className="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <a className="btn btn-lg btn-primary rounded-pill" href="">
                <BiRightArrowAlt className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
