import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctors from "./Pages/Dashboard/AddDoctors";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import Reviews from "./Pages/Dashboard/Reviews";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAadmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";

function App() {
  return (
    <div className=" mx-auto">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
          <Route
            path="users"
            element={
              <RequireAadmin>
                <Users></Users>
              </RequireAadmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAadmin>
                <AddDoctors></AddDoctors>
              </RequireAadmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAadmin>
                <ManageDoctors></ManageDoctors>
              </RequireAadmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
