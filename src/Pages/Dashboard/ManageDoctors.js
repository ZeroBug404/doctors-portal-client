import React from "react";
import { useQuery } from "react-query";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch(`http://localhost:5000/doctors`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  console.log(doctors);

  if (isLoading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-4xl">Manage doctors: {doctors.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                doctors.map((doctor, index) => <DoctorsRow 
                    key={doctor._id}
                    doctor={doctor}
                    index={index}
                    refetch={refetch}
                    ></DoctorsRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
