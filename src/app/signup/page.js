import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <br />
      <br />
      <section className="containerlog forms">
        <div className="form login">
          <div className="form-content">
            <header>Бүртгэл үүсгэх</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Цахим шуудан"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button>Нэвтрэх</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Шинэ хэрэглэгч?{" "}
                <Link href="/signup">
                  <div className="link signup-link">Бүртгэл үүсгэх</div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
