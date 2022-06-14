/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myAppointments, setMyAppointments] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://shielded-hollows-05722.herokuapp.com/booking?patientEmail=${user.email}`, {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => {
        console.log(res);
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken');
          navigate('/');
      }
      return res.json()
      })
      .then((data) => {
        setMyAppointments(data)
      });
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
                  myAppointments?.map(a => <tr>
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
