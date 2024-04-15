"use client";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Link from "next/link";
import React, { useState } from "react";
import { SupabaseAdmin } from "../lib/supabase";
import { useRouter } from "next/navigation";

const Page = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password) {
      setFormError("Please fill all fields");
      return;
    }

    try {
      // Insert a new row into the 'users' table
      const { data, error } = await SupabaseAdmin.from("users").insert([
        { firstname, lastname, email, password },
      ]);

      if (error) {
        throw error;
      }

      // Data inserted successfully
      console.log("User signed up successfully:", data);
      setSignupSuccess(true);
      localStorage.setItem("isLoggedIn", "true");

      // Optional: Redirect the user to a different page after sign-up
      router.push("/");
    } catch (error) {
      console.error("Sign-up failed:", error.message);
      setFormError("Failed to sign up. Please try again later.");
    }
  };
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
            <form onSubmit={handleSubmit}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="first Name"
                  className="input"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Цахим шуудан"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>
              {/* <div className="field input-field">
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div> */}

              <div className="field button-field">
                <button>Нэвтрэх</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Шинэ хэрэглэгч?{" "}
                <Link href="/login">
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
