import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Appointmentinfo from "./Appointmentinfo";
import BookingModal from "./BookingModal";

const AvilableAppointments = ({ date }) => {
  // const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const { data: appointments, isLoading, refetch } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  // useEffect(() => {
  //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setAppointments(data))
  // },[formattedDate])

  return (
    <div className="text-center my-12 px-12">
      <h3 className="text-primary font-bold text-lg">
        Available Appointments On {format(date, "PP")}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {appointments?.map((appointment) => (
          <Appointmentinfo
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></Appointmentinfo>
        ))}
        {treatment && (
          <BookingModal
            setTreatment={setTreatment}
            date={date}
            treatment={treatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvilableAppointments;
