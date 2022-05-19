/* eslint-disable no-unused-vars */
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    // console.log("updated");
  };

  if (user || gUser) {
    navigate("/");
  }

  let signInError;
  if (error || gError || updateError) {
    signInError = (
      <small className="text-red-500">
        {error?.message} || {gError?.message} || {updateError?.message}
      </small>
    );
  }

  if (loading || gLoading || updating) {
    return (
      <div className="flex w-screen h-screen items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if(token){
    navigate('/appointment')
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-center">SignUp</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              placeholder="Fullname"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Name is required</span>
            )}
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Email is required</span>
            )}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs my-3"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Password is required</span>
            )}
            {signInError}
            <input
              className="btn w-full max-w-xs my-3"
              type="submit"
              value="SignUp"
            />
          </form>

          <div className="text-center">
            <p>
              Already registered?{" "}
              <Link to={"/Login"} className="text-secondary">
                Login
              </Link>
            </p>
          </div>

          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
