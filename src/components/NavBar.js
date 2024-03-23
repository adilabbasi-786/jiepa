"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/images/nurli-logo.png";
import { useEffect, useState } from "react";
export const useClient = () => {};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  // useEffect(() => {
  //   setIsOpen(false);
  //   setIsOpen1(false);
  // }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <Link href="/" passHref className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary flex items-center">
              <Image src={logo} alt="Your Logo" width="100px" height={100} />
              НУРЛЫ
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarCollapse"
            style={{ visibility: "visible" }}
          >
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" passHref className="nav-item nav-link active">
                НҮҮР
              </Link>
              <div className="nav-item dropdown">
                <a
                  passHref
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  БИДНИЙ ТУХАЙ
                </a>
                <div
                  className={`dropdown-menu m-0 ${isOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <Link href="/about" className="dropdown-item">
                    Эмнэлэг
                  </Link>
                  <Link href="/team" className="dropdown-item">
                    Удирдлагын зөвлөлийн гишүүд
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  passHref
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  onClick={toggleDropdown1}
                  style={{ cursor: "pointer" }}
                >
                  ТУСЛАМЖ ҮЙЛЧИЛГЭЭ
                </a>
                <div className={`dropdown-menu m-0 ${isOpen1 ? "show" : ""}`}>
                  <Link href="/blog" className="dropdown-item">
                    Эмчилгээ, үйлчилгээ
                  </Link>
                  <Link href="/detail" className="dropdown-item">
                    Багц шинжилгээ
                  </Link>
                  <Link href="/service" className="dropdown-item">
                    Хэвтэн эмчлүүлэх
                  </Link>
                  <Link href="/faq" className="dropdown-item">
                    Түгээмэл асуултууд
                  </Link>
                </div>
              </div>
              <Link href="/appointment" passHref className="nav-item nav-link">
                ЦАГ ЗАХИАЛГА
              </Link>
              <Link href="/contact" passHref className="nav-item nav-link">
                ХОЛБОО БАРИХ
              </Link>
              <Link href="/login" passHref>
                <div className="nav-item nav-link">НЭВТРЭХ</div>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
