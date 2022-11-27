import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(
      `https://doctors-portal-server-bj24.onrender.com/users/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make ann admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
          refetch();
        } else {
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
