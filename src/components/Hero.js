import React from "react";
import Image from "next/image";
import ugtah from "../app/images/ugtah.jpeg";

const Hero = () => {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 position-relative">
      {/* Absolute positioning for the image */}
      <Image
        src={ugtah}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="container py-5 position-relative z-index-1">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h5
              className="d-inline-block text-primary text-uppercase border-bottom border-5"
              style={{
                fontSize: "50px",
                borderColor: "rgba(256, 256, 256, .3)",
              }}
            >
              Тавтай морилно уу!
            </h5>
            <h1 className="display-1 text-white mb-md-4">
              Мэдрэл, дотор, уламжлалтын эмнэлэг
            </h1>
            <div className="pt-2">
              <a
                href="blog.html"
                className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                Эмчилгээ, үйлчилгээ
              </a>
              <a
                href="appointment.html"
                className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
              >
                ЦАГ ЗАХИАЛГА
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
