/* eslint-disable no-unused-vars */
import { format } from "date-fns";
import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const slotRef = useRef()

  const formattedDate = format(date, "PP")
  const handleBookAppointment = (e) => {
    e.preventDefault();
    const slot = slotRef.current.value; 

    const bookingInfo = {
      treatmentId: _id,
      treatmentName: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value
    }

    fetch('https://doctors-portal-server-bj24.onrender.com/booking',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data => {

      console.log(data);
      if (data.success) {
        toast(`Your Appointment is placed, on ${formattedDate} at ${slot}`)
      }
      else{
        toast.error (`Already have an appointment, on ${data.booking?.date} at ${data.booking?.slot}`)
      }
    })

    refetch();
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
                value={slot}
                ref={slotRef}
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
