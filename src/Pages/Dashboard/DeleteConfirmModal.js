import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
  const { name, email } = deleteConfirm;

  const handleDelete = () => {
    fetch(`https://doctors-portal-server-bj24.onrender.com/doctors/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} deleted`);
          refetch();
          setDeleteConfirm(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={handleDelete}
              class="btn btn-xs btn-outline btn-error"
            >
              delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs btn-outline">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
