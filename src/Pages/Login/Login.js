/* eslint-disable no-unused-vars */
import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (loading || gLoading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  let signInError;
  if(error || gError) {
    signInError = <small className="text-red-500">{error?.message}</small>;
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  let from = location.state?.from?.pathname || "/";
  if(gUser || user){
    navigate(from, { replace: true });
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="font-bold text-4xl text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              value="Login"
            />
          </form>

          <div>
            <p>New to Doctors Portal? <Link to={'/register'} className='text-secondary'>Create new account</Link></p>
          </div>

          <div className="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
