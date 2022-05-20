import React from "react";
import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch }) => {
  const { name, speciality, img, email } = doctor;

  const handleDelete = () => {
      fetch(`http://localhost:5000/doctors/${email}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount){
              toast.success(`Doctor: ${name} deleted`);
              refetch();
          }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 mask mask-squircle">
            <img src={img} alt='avatar' />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button onClick={handleDelete} class="btn btn-xs btn-outline btn-error">delete</button>
      </td>
    </tr>
  );
};

export default DoctorsRow;
