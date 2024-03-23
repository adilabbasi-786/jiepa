import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container-fluid pt-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Холбоо барих
            </h5>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <BsFillTelephoneFill
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(-55deg)", fontSize: "30px" }}
                  />
                </div>
                <h6 className="mb-0">+976 9942 6565</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <BsFillTelephoneFill
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(-55deg)", fontSize: "30px" }}
                  />
                </div>
                <h6 className="mb-0">+976 9442 0101</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: "200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: "100px",
                    height: "70px",
                    transform: "rotate(-15deg)",
                  }}
                >
                  <BsFillTelephoneFill
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(-55deg)", fontSize: "30px" }}
                  />
                </div>
                <h6 className="mb-0">+976 9542 0853</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: "500px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed/v1/place?q=Hospital+Nurli,+Ölgii,+Mongolia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
