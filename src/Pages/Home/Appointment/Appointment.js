import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <section
      className="w-full h-full bg-cover bg-no-repeat my-32 py-12 lg:py-0"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex justify-center items-center px-12">
        <div style={{marginTop: '-100px'}} className="flex-1 hidden lg:block">
          <img className="" src={doctor} alt="" />
        </div>
        <div className="text-white flex-1 pr-24">
          <h4 className="text-primary font-bold mb-3">Appointment</h4>
          <h2 className="text-4xl mb-5">Make an appointment Today</h2>
          <p className="mb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
