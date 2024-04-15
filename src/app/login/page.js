"use client";

// import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import Link from "next/link";
import React, { useState } from "react";
import { SupabaseAdmin } from "../lib/supabase";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await SupabaseAdmin.from("users")
      .select("*")
      .eq("email", email)
      .single();
    if (error) {
      throw error;
    }

    if (!data) {
      throw new Error("User not found");
      alert("invalid password or email!");
    }
    if (data.password !== password) {
      alert("invalid password or email!");
      throw new Error("Incorrect password");
    }
    console.log("User authenticated:", data);
    localStorage.setItem("isLoggedIn", "true");
    try {
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("invalid password or email!");

      setLoginError("Failed to login. Please try again later.");
    }
  };

  return (
    <>
      <TopBar />
      <NavBar />
      <br />
      <section className="containerlog forms">
        <div className="form login">
          <div className="form-content">
            <header>Нэвтрэх</header>
            <form onSubmit={handleSubmit}>
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

              <div className="field button-field">
                <button>Нэвтрэх</button>
              </div>
            </form>

            {loginError && <div className="error-message">{loginError}</div>}

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
