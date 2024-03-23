"use client";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import React, { useState } from "react";
import { SupabaseAdmin } from "../lib/supabase";
import { format } from "date-fns";
const Page = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [availableday, setAvailableday] = useState("");
  const [formError, setFormError] = useState(null);
  const currentDate = format(new Date(), "yyyy-MM-dd");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !phonenumber || !availableday) {
      setFormError("Please fill all fields");
      return;
    }

    const { data: bookedDates, error } = await SupabaseAdmin.from(
      "available_dates"
    )
      .select()
      .eq("availableday", availableday);

    if (error) {
      console.error("Error checking booked dates:", error);
      setFormError("An error occurred. Please try again later.");
      return;
    }

    if (bookedDates && bookedDates.length > 0) {
      setFormError(
        "The selected date is already booked. Please choose another date."
      );
      return;
    }

    const { data, error: insertError } = await SupabaseAdmin.from(
      "available_dates"
    )
      .insert([{ firstname, lastname, phonenumber, availableday }])
      .select();

    if (insertError) {
      console.error("Error inserting booking:", insertError);
      setFormError(
        "An error occurred while processing your request. Please try again later."
      );
      return;
    }

    if (data) {
      console.log("Booking inserted successfully:", data);
      alert("Booking successful!");
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
                    <div className="col-12 col-sm-6">
                      <input
                        name="firstName"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder="First Name"
                        className="form-control bg-white border-0"
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        name="lastName"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Last Name"
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
                    <div className="col-12 col-sm-6"></div>

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

export default Page;
