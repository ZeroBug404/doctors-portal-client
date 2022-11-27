import { useState } from "react";
import { useQuery } from "react-query";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorsRow from "./DoctorsRow";

const ManageDoctors = () => {
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch(`https://doctors-portal-server-bj24.onrender.com/doctors`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );


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
                doctors?.map((doctor, index) => <DoctorsRow 
                    key={doctor._id}
                    doctor={doctor}
                    index={index}
                    refetch={refetch}
                    setDeleteConfirm={setDeleteConfirm}
                    ></DoctorsRow>)
            }
          </tbody>
        </table>
      </div>
      {deleteConfirm && <DeleteConfirmModal 
      deleteConfirm={deleteConfirm}
      refetch={refetch}
      setDeleteConfirm={setDeleteConfirm}
      ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;
