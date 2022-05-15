import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots } = treatment;

  const handleBookAppointment = (e) => {
    e.preventDefault();

    //to close the modal
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary mb-4">{name}</h3>

          <form
            onSubmit={handleBookAppointment}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              readOnly
              type="text"
              placeholder={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs">
              {slots?.map((slot, index) => (
                <option 
                key={index}
                >{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user.displayName}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <input
              type="email"
              name="email"
              value={user.email}
              className="input input-bordered w-full max-w-xs"
              disabled
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              className="btn btn-secondary w-2/4 block text-white"
              type="submit"
              value="Submit"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
