import React from "react";
import Image from "next/image";
import building from "../app/images/building.jpg";
import { FaUserDoctor } from "react-icons/fa6";
import { FaProcedures } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <Image
                src={building}
                className="position-absolute w-100 h-100 rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="mb-4">
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                Товч танилцуулга
              </h5>
              <h1 className="display-4">
                Дөрвөн удаа магадлан итгэмжлэгдсэн эмнэлэг
              </h1>
            </div>
            <p>
              “Нурлы” мэдрэл, дотор, уламжлалтын эмнэлэг нь 2008 онд мэдрэл
              уламжлалтын чиглэлээр эмчилгээ, оношилгоо хийж үйл ажиллагаагаа
              эхэлсэн юм.
            </p>
            <div className="row g-3 pt-3">
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaUserDoctor
                    className="fa fa-3x fa-user-md text-primary mb-3"
                    style={{ fontSize: "50px", display: "inline-block" }}
                  />
                  <h6 className="mb-0">
                    Мэргэшсэн
                    <small className="d-block text-primary">хамт олон</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaProcedures
                    className="fa fa-3x fa-procedures text-primary mb-3"
                    style={{ fontSize: "50px", display: "inline-block" }}
                  />
                  <h6 className="mb-0">
                    Тав тухтай
                    <small className="d-block text-primary">орчин</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaMicroscope
                    className="fa fa-3x fa-microscope text-primary mb-3"
                    style={{ fontSize: "50px", display: "inline-block" }}
                  />
                  <h6 className="mb-0">
                    Нарийвчлалтай
                    <small className="d-block text-primary">шинжилгээ</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FaAmbulance
                    className="fa fa-3x fa-ambulance text-primary mb-3"
                    style={{ fontSize: "50px", display: "inline-block" }}
                  />
                  <h6 className="mb-0">
                    Шуурхай
                    <small className="d-block text-primary">үйлчилгээ</small>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
