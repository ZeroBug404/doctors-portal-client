import { toast } from "react-toastify";

const DoctorsRow = ({ doctor, index, refetch, setDeleteConfirm }) => {
  const { name, speciality, img, email } = doctor;

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
        <label onClick={() => setDeleteConfirm(doctor)} for="delete-confirm-modal" class="btn modal-button btn-xs btn-outline btn-error">
        delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorsRow;
