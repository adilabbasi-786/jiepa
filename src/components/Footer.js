import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Холбоо барих
              </h4>
              <p className="mb-2">
                <a
                  href="https://www.google.com/maps/place/Hospital+Nurli/@48.9648979,89.9724347,19z/data=!4m7!3m6!1s0x42b4b58b818f9fb3:0x63a3f2ef72cc43eb!8m2!3d48.9646404!4d89.9719651!15sCg1udXJsaSBlbW5lbGVnkgEIaG9zcGl0YWzgAQA!16s%2Fg%2F11gyc_jq9w?entry=tts"
                  target="blank"
                  style={{ display: "flex" }}
                >
                  <FaMapMarkerAlt className="fa fa-map-marker-alt text-primary me-3" />
                  Нурлы эмнэлэг
                </a>
              </p>
              <p className="mb-2" style={{ display: "flex" }}>
                <FaEnvelope className="fa fa-envelope text-primary me-3" />
                <i></i>
                info@nurli.mn
              </p>
              <p className="mb-0" style={{ display: "flex" }}>
                <BsFillTelephoneFill className="fa fa-phone-alt text-primary me-3" />
                +976 9942 6565
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                Шуурхай холбоос
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a
                  className="text-light mb-2"
                  href="index.html"
                  style={{ display: "flex" }}
                >
                  <FaAngleRight className="fa fa-angle-right me-2" />
                  Нүүр
                </a>
                <a
                  className="text-light mb-2"
                  href="about.html"
                  style={{ display: "flex" }}
                >
                  <FaAngleRight className="fa fa-angle-right me-2" />
                  Бидний тухай
                </a>
                <a
                  className="text-light mb-2"
                  href="blog.html"
                  style={{ display: "flex" }}
                >
                  <FaAngleRight className="fa fa-angle-right me-2" />
                  Эмчилгээ, үйлчилгээ
                </a>
                <a
                  className="text-light mb-2"
                  href="appointment.html"
                  style={{ display: "flex" }}
                >
                  <FaAngleRight className="fa fa-angle-right me-2" />
                  Цаг захиалга
                </a>
                <a
                  className="text-light"
                  href="contact.html"
                  style={{ display: "flex" }}
                >
                  <FaAngleRight className="fa fa-angle-right me-2" />
                  Холбоо барих
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-primary" href="#">
                  NURLI
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{" "}
                <a
                  className="text-primary"
                  href="https://www.instagram.com/khajybyek/"
                >
                  Boogey
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
