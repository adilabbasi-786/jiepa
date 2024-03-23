"use client";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import React, { useState } from "react";
import { SupabaseAdmin } from "../lib/supabase";
import { format } from "date-fns";
const page = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [availableday, setAvailableday] = useState("");
  const [formError, setFormError] = useState(null);
  const currentDate = format(new Date(), "yyyy-MM-dd");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !phonenumber) {
      setFormError("please fill all records");
      return;
    }
    const { data, error } = await SupabaseAdmin.from("available_dates")
      .insert([{ firstname, lastname, phonenumber, availableday }])
      .select();
    if (error) {
      console.log(error);
      setFormError("please fill all data");
    }
    if (data) {
      console.log("data", data);
      alert("data send succesfuly");
      setFormError(null);
      setLastname("");
      setPhonenumber("");
      setAvailableday("");
      setFirstname("");
    }
  };
  return (
    <>
      <TopBar />
      <NavBar />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  Цаг захиалга
                </h5>
                <h1 className="display-4">Хэвтэн эмчлүүлэх цаг захиалах</h1>
              </div>
              <p className="mb-5">
                Та тухайн өдрөөс эхлэн сарын хугацааны өдрөөс хэвтэн эмчлүүлэх
                тасаг, палатаа сонгон үйлчлүүлэх боломжтой.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-light text-center rounded p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* <div className="col-12 col-sm-6"> */}
                    {/* <select
                        className="form-select bg-white border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Тасаг</option>
                        <option value="1">Мэдрэлийн тасаг</option>
                        <option value="2">Уламжлалтын тасаг</option>
                        <option value="3">Дотрын тасаг</option>
                        <option value="4">VIP тасаг</option>
                      </select> */}
                    {/* </div> */}
                    {/* <div className="col-12 col-sm-6"> */}
                    {/* <select
                        className="form-select bg-white border-0"
                        style={{ height: "55px" }}
                      >
                        <option selected>Палат</option>
                        <option value="1">1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                      </select> */}
                    {/* </div> */}
                    {/* <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="firstName"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        classNameName="form-control bg-white border-0"
                        placeholder="First Name"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        classNameName="form-control bg-white border-0"
                        placeholder="Last Name"
                        style={{ height: "55px" }}
                      />
                    </div> */}
                    {/* <div className="col-12 col-sm-6">
                      <input
                        type="register-id"
                        className="form-control bg-white border-0"
                        placeholder="Регистрийн дугар"
                        style={{ height: "55px" }}
                      />
                    </div> */}
                    {/* <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-white border-0"
                        placeholder="Цахим шуудан"
                        style={{ height: "55px" }}
                      />
                    </div> */}
                    <div className="col-12 col-sm-6">
                      <input
                        name="firstName"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First Nname"
                        className="form-control bg-white border-0"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        name="lastName"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last Nname"
                        className="form-control bg-white border-0"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                        placeholder="phone Number"
                        className="form-control bg-white border-0"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="date"
                        min={currentDate}
                        value={availableday}
                        onChange={(e) => setAvailableday(e.target.value)}
                        placeholder="Date for Booking"
                        className="form-control bg-white border-0"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      {/* <div
                        className="date"
                        id="date"
                        data-target-input="nearest"
                      >
                        <input
                          name="date"
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          classNameName="form-select bg-white border-0"
                          style={{ height: "55px" }}
                        />
                      </div> */}
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Хүсэлт илгээх
                      </button>
                    </div>
                  </div>
                  {formError && <p>{formError}</p>}
                </form>
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
