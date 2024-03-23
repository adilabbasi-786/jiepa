import React from "react";
import Image from "next/image";
import team1 from "../app/images/team-1.jpg";
import team2 from "../app/images/team-2.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Teams = () => {
  return (
    <div classNameName="container-fluid py-5">
      <div classNameName="container">
        <div
          classNameName="text-center mx-auto mb-5"
          style={{ maxWidth: "500px" }}
        >
          <h5 classNameName="d-inline-block text-primary text-uppercase border-bottom border-5">
            Бидний хамт олон
          </h5>
          <h1 classNameName="display-4">Удирдлагын зөвлөлийн гишүүд</h1>
        </div>
        <div className="owl-carousel team-carousel position-relative owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-1341px, 0px, 0px)",
                transition: "all 1s ease 0s",
                width: "4694px",
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Сатбалды Арман</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Гүйцэтгэх захирал
                        </h6>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Нэгдэлхан Еркежан</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Ерөнхий эмч
                        </h6>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team2} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Сыдых Айгүл</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Эмнэлгийн захирал
                        </h6>
                        <p className="m-0">
                          Клиникийн профессор, анагаах ухааны магистр, мэдрэлийн
                          их эмч
                        </p>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Сатбалды Арман</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Гүйцэтгэх захирал
                        </h6>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Нэгдэлхан Еркежан</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Ерөнхий эмч
                        </h6>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Сыдых Айгүл</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Эмнэлгийн захирал
                        </h6>
                        <p className="m-0">
                          Клиникийн профессор, анагаах ухааны магистр, мэдрэлийн
                          их эмч
                        </p>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "625.5px", marginRight: "45px" }}
              >
                <div className="team-item">
                  <div className="row g-0 bg-light rounded overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                      <Image src={team1} style={{ objectFit: "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                      <div className="mt-auto p-4">
                        <h3>Сатбалды Арман</h3>
                        <h6 className="fw-normal fst-italic text-primary mb-4">
                          Гүйцэтгэх захирал
                        </h6>
                      </div>
                      <div className="d-flex mt-auto border-top p-4">
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaTwitter
                            className="fab fa-twitter"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                          href="#"
                        >
                          <FaFacebookF
                            className="fab fa-facebook-f"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                        <a
                          className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                          href="#"
                        >
                          <FaLinkedin
                            className="fab fa-linkedin-in"
                            style={{
                              color: "white",
                              marginTop: "3px",
                              marginLeft: "-2px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev">
              <FaArrowLeftLong />
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="owl-next">
              <FaArrowRight />
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="owl-dots disabled"></div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
