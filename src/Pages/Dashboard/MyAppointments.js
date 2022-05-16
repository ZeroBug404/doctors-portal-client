/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myAppointments, setMyAppointments] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyAppointments(data));
  }, [user]);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Slot</th>
            </tr>
          </thead>
          <tbody>
              {
                  myAppointments.map(a => <tr>
                    <th>1</th>
                    <td>{a.treatmentName}</td>
                    <td>{a.date}</td>
                    <td>{a.slot}</td>
                  </tr>)
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
