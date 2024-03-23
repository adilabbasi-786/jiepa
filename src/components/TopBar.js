import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 text-center text-lg-start mb-2 mb-lg-0"
            // style={{ display: "" }}
          >
            <div className="d-inline-flex align-items-center">
              <a
                className="text-decoration-none text-body pe-3"
                href=""
                style={{ display: "contents" }}
              >
                <BsFillTelephoneFill className="bi bi-telephone me-2" />
                +976 99426565
              </a>
              <span className="text-body">|</span>
              <a
                className="text-decoration-none text-body px-3"
                href=""
                style={{ display: "contents" }}
              >
                <CiMail className="bi bi-envelope me-2" />
                info@nurli.mn
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-body px-2"
                href="https://www.facebook.com/profile.php?id=100076170275065"
              >
                <FaFacebookF className="fab fa-facebook-f" />
              </a>
              <span className="text-body">|</span>
              <a
                className="text-body px-2 active"
                href="https://maps.app.goo.gl/Jt6eWEwvJwAYne1o8"
                target="blank"
              >
                <FaLocationDot className="fa fa-map-marker-alt text-primary me-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
