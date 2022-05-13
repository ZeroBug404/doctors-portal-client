import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">{name}</h3>

          <form className="grid grid-cols-1 gap-3 justify-items-center">
            <input
              readOnly
              type="text"
              placeholder={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select class="select select-bordered w-full max-w-xs">
              {
                  slots?.map(slot => <option>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              className="btn btn-secondary w-2/4 block text-white"
              type="submit"
              value="Submit"
            />
          </form>
          {/* <div class="modal-action">
            <label for="booking-modal" class="btn">
              Yay!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
