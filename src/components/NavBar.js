"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/images/nurli-logo.png";
import { useEffect, useState } from "react";
export const useClient = () => {};
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("User logged in:", userLoggedIn);
    setIsLoggedIn(userLoggedIn === "true");
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
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
              <Link
                href="/"
                passHref
                className={`nav-item nav-link ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                НҮҮР
              </Link>
              <div className="nav-item dropdown">
                <a
                  passHref
                  className={`nav-link dropdown-toggle ${
                    pathname === "/about" ? "active" : ""
                  } `}
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
                  className={`nav-link dropdown-toggle ${
                    pathname === "/blog" ? "active" : ""
                  } `}
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
              <Link
                href="/appointment"
                passHref
                className={`nav-item nav-link ${
                  pathname === "/appointment" ? "active" : ""
                }`}
              >
                ЦАГ ЗАХИАЛГА
              </Link>
              <Link
                href="/contact"
                passHref
                className={`nav-item nav-link ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                ХОЛБОО БАРИХ
              </Link>
              {isLoggedIn ? (
                // If user is logged in, show the Logout button
                <Link href="/" passHref onClick={handleLogout}>
                  <div className="nav-item nav-link">Logout</div>
                </Link>
              ) : (
                // If user is not logged in, show the Sign Up button
                <Link href="/signup" passHref>
                  <div
                    className={`nav-item nav-link ${
                      pathname === "/signup" ? "active" : ""
                    }`}
                  >
                    Sign Up
                  </div>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
