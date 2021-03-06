import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col  ">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl font-bold text-purple-700">
          Welcome to your Dashboard
        </h1>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>Appointments</Link>
          </li>
          <li>
            <Link to={"/dashboard/reviews"}>Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to={"/dashboard/users"}>All Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/addDoctor"}>Add new Doctor</Link>
              </li>
              <li>
                <Link to={"/dashboard/manageDoctors"}>Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
