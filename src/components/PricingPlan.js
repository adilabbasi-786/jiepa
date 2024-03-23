import React from "react";
import Image from "next/image";

import price1 from "../app/images/price-1.jpg";
import price2 from "../app/images/price-2.jpg";
import price3 from "../app/images/price-3.jpg";
import price4 from "../app/images/price-4.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const PricingPlan = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Medical Packages
          </h5>
          <h1 className="display-4">Awesome Medical Programs</h1>
        </div>
        <div
          className="owl-carousel price-carousel position-relative owl-loaded owl-drag"
          style={{ padding: "0 45px 45px 45px" }}
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-1251px, 0px, 0px)",
                transition: "all 0s ease 0s",
                width: "4170px",
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price1} className="img-fluid rounded-top" />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Health Checkup</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        99
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price3} className="img-fluid rounded-top" />
                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Dental Care</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        149
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price4} />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Operation &amp; Surgery</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        199
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price1} className="img-fluid rounded-top" />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Pregnancy Care</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        49
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price2} className="img-fluid rounded-top" />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Health Checkup</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        99
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price3} className="img-fluid rounded-top" />
                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Dental Care</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        149
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price4} className="img-fluid rounded-top" />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Operation &amp; Surgery</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        199
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price1} className="img-fluid rounded-top" />

                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Pregnancy Care</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        49
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price2} className="img-fluid rounded-top" />\
                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Health Checkup</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        99
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "372px", marginRight: "45px" }}
              >
                <div className="bg-light rounded text-center">
                  <div className="position-relative">
                    <Image src={price3} className="img-fluid rounded-top" />
                    <div
                      className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                      style={{ background: "rgba(29, 42, 77, .8)" }}
                    >
                      <h3 className="text-white">Dental Care</h3>
                      <h1 className="display-4 text-white mb-0">
                        <small
                          className="align-top fw-normal"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        149
                        <small
                          className="align-bottom fw-normal"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          / Year
                        </small>
                      </h1>
                    </div>
                  </div>
                  <div className="text-center py-5">
                    <p>Emergency Medical Treatment</p>
                    <p>Highly Experienced Doctors</p>
                    <p>Highest Success Rate</p>
                    <p>Telephone Service</p>
                    <a
                      href=""
                      className="btn btn-primary rounded-pill py-3 px-5 my-2"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">
              <FaArrowLeft className="bi bi-arrow-left" />
            </div>
            <div className="owl-next">
              <FaArrowRight className="bi bi-arrow-right" />
            </div>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
