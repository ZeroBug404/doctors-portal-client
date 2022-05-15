import React from "react";

const Appointmentinfo = ({ appointment, setTreatment }) => {
  const { name, slots } = appointment;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <div className="card-body ">
        <h2 className="text-primary font-bold text-lg text-center">{name}</h2>

        <p>{slots[0]}</p>
        {slots.length ? (
          <span>{slots.length} Space available</span>
        ) : (
          <>
            <span>Try another day</span>
            <p className="text-red-500">No space available</p>
          </>
        )}
        <div className="card-actions justify-center w-50">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(appointment)}
            disabled={slots <= 0}
            className="btn modal-button btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Appointmentinfo;
